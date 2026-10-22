/**
 * Copies the Latin woff2 font files used by Bishora out of the @fontsource
 * packages and into `public/fonts/`.
 *
 * This keeps the site free of third-party font requests (no extra DNS/TLS
 * round-trip, no render-blocking external stylesheet) while the @fontsource
 * packages remain the single source of truth for the font files.
 *
 * Run automatically via the `predev` and `prebuild` npm scripts.
 */
import { copyFile, mkdir } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(here, '..');
const outDir = join(projectRoot, 'public', 'fonts');

/** package → the weights Bishora actually uses. */
const fonts = [
  { pkg: 'inter', weights: [400, 500, 600, 700] },
  { pkg: 'plus-jakarta-sans', weights: [500, 600, 700, 800] },
];

await mkdir(outDir, { recursive: true });

let copied = 0;

for (const { pkg, weights } of fonts) {
  for (const weight of weights) {
    const fileName = `${pkg}-latin-${weight}-normal.woff2`;
    const source = join(
      projectRoot,
      'node_modules',
      '@fontsource',
      pkg,
      'files',
      fileName,
    );
    const destination = join(outDir, fileName);

    try {
      await copyFile(source, destination);
      copied += 1;
    } catch (error) {
      console.warn(
        `[fonts] skipped ${fileName} — ${error.code ?? error.message}. ` +
          'Run `npm install` to restore the @fontsource packages.',
      );
    }
  }
}

console.log(`[fonts] copied ${copied} woff2 files into public/fonts`);
