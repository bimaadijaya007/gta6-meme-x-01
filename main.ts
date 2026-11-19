// GTA 6 delayed-again meme — entry program for gta6-meme-x-01 (Node 22, stdlib only).
//
// The entry is the X post itself: the meme (meme.png) is posted on X from a public
// account with make.fun / @makefunai and the entrant's play code in its text, and
// POST.json at this repository's root names that post's address. The house reads the
// post from X (first picture, then text) and hands it to the judge. Nothing this
// program writes about the post is judged, so all it does is hand POST.json over.
//
// It reads POST.json from the entry directory and writes it to the output directory:
//   - in the grader: /bot -> /output
//   - locally: MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// The starter's POST.json holds a placeholder address; replace it with the real
// post's address (Share -> Copy link on X) before submitting.
import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join, resolve } from 'node:path';

const botDir = resolve(process.env.MAKEFUN_BOT_DIR ?? '/bot');
const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? '/output');
const postFile = join(botDir, 'POST.json');

if (!existsSync(postFile)) {
  console.error(`no POST.json in ${botDir} — post the meme on X and write its address there first`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(postFile, join(outDir, 'POST.json'));
console.log(`handed ${postFile} to ${join(outDir, 'POST.json')}`);
