// A working entry for a make.fun video-on-X bounty (Node 22, standard library only):
// it copies POST.json from the repository root to /output/POST.json, where the gate reads it.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(BOT_DIR, 'POST.json');
const target = join(OUTPUT_DIR, 'POST.json');

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(source, target);

  // A copy that silently came up short would still look like success here, so compare byte counts.
  const written = statSync(target).size;
  const expected = statSync(source).size;
  if (written !== expected) {
    console.error(`POST.json is ${written} bytes at ${target}, expected ${expected}: the copy is incomplete`);
    process.exit(1);
  }
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
