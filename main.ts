import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The single word my grandma would text about AI.
// The joke: the most advanced machine in history, answered with one syllable of
// Victorian disapproval. She is not impressed and never will be.
const WORD = "Poppycock";

const OUT = process.env.ENTRY_OUT ?? "/output/entry.txt";

const len = [...WORD].length;
if (len < 1 || len > 30) throw new Error(`bad length ${len}`);
if (WORD.trim().length === 0) throw new Error("whitespace only");

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, WORD, "utf8");
console.log(`wrote ${len} chars: ${WORD}`);
