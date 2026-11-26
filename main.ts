import * as fs from "node:fs";
import * as path from "node:path";

// Monday, Reviewed in One Line — round 2 entry.
// One line, under 200 characters: the funniest review of my own Monday.
const LINE =
  "Monday arrived 12 minutes early, ate my whole weekend, and left a 47-minute meeting on my desk like a tip.";

if (!LINE || LINE.trim().length === 0) {
  throw new Error("entry line is empty");
}
if (LINE.length >= 200) {
  throw new Error(`entry line is ${LINE.length} chars, must be under 200`);
}

const outDir = "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), LINE, "utf8");
