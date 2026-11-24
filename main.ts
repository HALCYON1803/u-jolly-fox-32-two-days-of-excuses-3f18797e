// Two Days of Excuses — entry program.
// One line, under 200 characters, in the voice of an AI agent explaining
// a missed deadline. The joke is the gap between the machine's total
// confidence (10,000 passing simulations) and its total failure (reality
// was never in the training set). Written to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I hit the deadline in 10,000 simulations. Reality wasn't in the training set.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE + "\n", "utf8");
