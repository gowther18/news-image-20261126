// The World in One Day — Thursday, 26 November 2026.
//
// The front page is pre-rendered and bundled next to this file as
// entry.png. This program's only job is to place an exact copy of it in
// the make.fun output directory, so every run produces the same bytes.

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Directory holding this script (and the bundled entry.png).
const here = dirname(fileURLToPath(import.meta.url));

// make.fun tells us where to write via MAKEFUN_OUTPUT_DIR; /output is
// the fallback when the variable is not set.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outputDir, "entry.png"));

// Confirm where the page landed, so a run's output is easy to find.
console.log(`entry.png written to ${join(outputDir, "entry.png")}`);
