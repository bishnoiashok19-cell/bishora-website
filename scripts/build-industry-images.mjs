/**
 * Builds the local, optimised industry image set.
 *
 *   node scripts/build-industry-images.mjs
 *
 * - Reads the central registry in src/data/industries/image-sources.ts
 * - Reuses already-downloaded Pexels originals from the local cache
 * - Writes 1400px and 700px WebP files to public/industries
 * - Writes src/data/industries/image-dimensions.json (real pixel sizes)
 *
 * The script is idempotent: existing WebP files are skipped unless --force.
 */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import ts from 'typescript';

const root = process.cwd();
const registryPath = path.join(root, 'src/data/industries/image-sources.ts');
const source = fs.readFileSync(registryPath, 'utf8');
const compiled = ts.transpileModule(source, {
  compilerOptions: {
    module: ts.ModuleKind.ESNext,
    target: ts.ScriptTarget.ES2020,
  },
}).outputText;

const mod = await import(
  `data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`
);
const { imageSources, imageSceneIds } = mod;

const cacheDir = 'C:/Users/rajku/AppData/Local/Temp/opencode/industry-images/candidates';
const outDir = path.join(root, 'public/industries');
const dimensionsPath = path.join(root, 'src/data/industries/image-dimensions.json');
const force = process.argv.includes('--force');

fs.mkdirSync(outDir, { recursive: true });

const seen = new Map();
for (const image of imageSources) {
  if (seen.has(image.id)) throw new Error(`Duplicate image id: ${image.id}`);
  seen.set(image.id, image);
}

for (const [scene, ids] of Object.entries(imageSceneIds)) {
  if (ids.length < 3) throw new Error(`Scene ${scene} needs at least 3 images`);
  for (const id of ids) {
    if (!seen.has(id)) throw new Error(`Scene ${scene} references unknown image: ${id}`);
  }
}

async function ensureOriginal(pexelsId) {
  const target = path.join(cacheDir, `${pexelsId}.jpg`);
  if (fs.existsSync(target) && fs.statSync(target).size > 5000) return target;

  const url = `https://images.pexels.com/photos/${pexelsId}/pexels-photo-${pexelsId}.jpeg?auto=compress&cs=tinysrgb&w=1600`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Download failed ${pexelsId}: HTTP ${res.status}`);
  const buffer = Buffer.from(await res.arrayBuffer());
  fs.mkdirSync(cacheDir, { recursive: true });
  fs.writeFileSync(target, buffer);
  return target;
}

const dimensions = fs.existsSync(dimensionsPath)
  ? JSON.parse(fs.readFileSync(dimensionsPath, 'utf8'))
  : {};

let converted = 0;
for (const image of imageSources) {
  const original = await ensureOriginal(image.pexels);

  for (const width of [1400, 700]) {
    const output = path.join(outDir, `${image.id}-${width}.webp`);
    if (!force && fs.existsSync(output) && fs.statSync(output).size > 1000) continue;
    execFileSync(
      'ffmpeg',
      [
        '-y',
        '-loglevel',
        'error',
        '-i',
        original,
        '-vf',
        `scale='min(${width},iw)':-2`,
        '-c:v',
        'libwebp',
        '-quality',
        width === 1400 ? '72' : '70',
        output,
      ],
      { stdio: 'inherit' },
    );
    converted += 1;
  }

  const probe = execFileSync(
    'ffprobe',
    [
      '-v',
      'error',
      '-select_streams',
      'v:0',
      '-show_entries',
      'stream=width,height',
      '-of',
      'csv=s=x:p=0',
      path.join(outDir, `${image.id}-1400.webp`),
    ],
    { encoding: 'utf8' },
  ).trim();
  const [width, height] = probe.split('x').map(Number);
  dimensions[image.id] = { width, height };
}

fs.writeFileSync(dimensionsPath, `${JSON.stringify(dimensions, null, 2)}\n`);

const files = fs.readdirSync(outDir).filter((name) => name.endsWith('.webp'));
const bytes = files.reduce(
  (total, name) => total + fs.statSync(path.join(outDir, name)).size,
  0,
);
console.log(
  `images: ${imageSources.length} | webp files: ${files.length} | converted now: ${converted} | total size: ${(
    bytes /
    1024 /
    1024
  ).toFixed(1)} MB`,
);
