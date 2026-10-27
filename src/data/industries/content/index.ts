import type { BusinessTypeContentGroup } from '../types';
import { businessTypeContentPart1 } from './bt-01';
import { businessTypeContentPart2 } from './bt-02';
import { businessTypeContentPart3 } from './bt-03';
import { businessTypeContentPart4 } from './bt-04';
import { businessTypeContentPart5 } from './bt-05';
import { businessTypeContentPart6 } from './bt-06';
import { businessTypeContentPart7 } from './bt-07';

/**
 * Editorial content for every business type, split into manageable files.
 *
 * Slugs are not repeated here: `index.ts` derives the key from the category,
 * group and approved business-type name, then fails loudly if any type is
 * missing content. That keeps the directory and the copy in step.
 */
export const businessTypeContent: BusinessTypeContentGroup[] = [
  ...businessTypeContentPart1,
  ...businessTypeContentPart2,
  ...businessTypeContentPart3,
  ...businessTypeContentPart4,
  ...businessTypeContentPart5,
  ...businessTypeContentPart6,
  ...businessTypeContentPart7,
];
