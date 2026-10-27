import dimensions from './image-dimensions.json';
import {
  imageSceneIds,
  imageSources,
  type ImageSceneId,
} from './image-sources';

export type { ImageSceneId };

export type IndustryImage = {
  id: string;
  /** Locally hosted, optimised 1400px WebP. */
  src: string;
  /** Responsive source set (700w + 1400w). */
  srcSet: string;
  width: number;
  height: number;
  alt: string;
  source: 'Pexels';
  sourceUrl: string;
  assetUrl: string;
  license: 'Pexels License';
  verifiedAt: string;
  scenes: ImageSceneId[];
};

const sizes = dimensions as Record<string, { width: number; height: number }>;

export const industryImages: Record<string, IndustryImage> = Object.fromEntries(
  imageSources.map((image) => {
    const size = sizes[image.id];

    if (!size) {
      throw new Error(`Missing dimensions for industry image: ${image.id}`);
    }

    return [
      image.id,
      {
        id: image.id,
        src: `/industries/${image.id}-1400.webp`,
        srcSet: `/industries/${image.id}-700.webp 700w, /industries/${image.id}-1400.webp 1400w`,
        width: size.width,
        height: size.height,
        alt: image.alt,
        source: 'Pexels',
        sourceUrl: `https://www.pexels.com/photo/${image.pexels}/`,
        assetUrl: `https://images.pexels.com/photos/${image.pexels}/pexels-photo-${image.pexels}.jpeg`,
        license: 'Pexels License',
        verifiedAt: '2026-10-27',
        scenes: image.scenes,
      },
    ];
  }),
);

export const industryScenes = imageSceneIds;

/** Stable, small hash so every page gets a slightly different image order. */
function seedFrom(value: string): number {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash * 31 + value.charCodeAt(index)) % 100000;
  }
  return hash;
}

/**
 * Returns `count` photographs for a scene. The seed rotates the order so
 * sibling pages do not all open with the same hero image.
 */
export function imagesForScene(
  scene: ImageSceneId,
  count = 3,
  seed = '',
): IndustryImage[] {
  const ids = imageSceneIds[scene];

  if (!ids || ids.length === 0) {
    throw new Error(`Unknown image scene: ${scene}`);
  }

  const start = seed ? seedFrom(seed) % ids.length : 0;
  const result: IndustryImage[] = [];

  for (let index = 0; index < Math.min(count, ids.length); index += 1) {
    const image = industryImages[ids[(start + index) % ids.length]];
    if (!image) throw new Error(`Unknown image id in scene ${scene}: ${ids[index]}`);
    result.push(image);
  }

  return result;
}
