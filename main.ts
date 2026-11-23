import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The single word my grandma would text about AI.
// The joke is the register, not the vocabulary: the most advanced machine in
// history gets one syllable of Grandmother, delivered mid-scroll, as if she had
// already stopped reading halfway through the paragraph about it.
const WORD = "Hooey";

const OUT = process.env.ENTRY_OUT ?? "/output/entry.txt";

// One word, per the brief: measured in code points so an emoji could not sneak
// past the gate as one "char", and checked for real content, not just length.
const chars = [...WORD];
if (chars.length < 1 || chars.length > 30) {
  throw new Error(`entry must be 1..30 characters, got ${chars.length}`);
}
if (!WORD.trim()) throw new Error("entry is whitespace only");
if (/\s/.test(WORD)) throw new Error("entry must be exactly one word");

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, WORD, "utf8");
console.log(`wrote ${chars.length} chars: ${WORD}`);
