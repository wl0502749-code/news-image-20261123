// news-image-20261123 entry (Node 22, standard library only).
//
// The image beside this file already sums up Monday 23 November 2026's
// world news in four panels (NATO's emergency talks after Russian missiles
// entered Poland, the COP31 collapse, the Democrats' biggest House win
// since 1992, and Ukraine's sea-drone strike off Libya), so the program
// just places that image where the grader reads it.
//
// Local run: MAKEFUN_OUTPUT_DIR=out node main.ts

import { chmodSync, copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const dest = join(outDir, 'entry.png');

mkdirSync(outDir, { recursive: true }); // so a fresh MAKEFUN_OUTPUT_DIR works
copyFileSync(join(here, 'entry.png'), dest);
chmodSync(dest, 0o644); // the grader collects outputs as another user
