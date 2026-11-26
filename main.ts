// The World in One Day — Thursday, 26 November 2026.
//
// The front page is already composed and bundled as entry.png next to
// this file. All this program does is place an exact copy of that image
// into the output directory the harness points at, so every run yields
// the same bytes — no generation, no randomness, no network.

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

copyFileSync(source, join(outDir, "entry.png"));
