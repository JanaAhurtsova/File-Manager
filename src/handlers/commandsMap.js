import { handleLs } from './commands/handleLs.js';
import { handleUp } from './commands/handleUp.js';
import { handleCd } from './commands/handleCd.js';
import { handleCat } from './commands/handleCat.js';
import { handleAdd } from './commands/handleAdd.js';
import { handleRename } from './commands/handleRename.js';
import { handleCp } from './commands/handleCp.js';
import { handleMv } from './commands/handleMv.js';
import { handleRm } from './commands/handleRm.js';
import { handleOs } from './commands/handleOs.js';

export const commandsMap = {
  cat: handleCat,
  add: handleAdd,
  rn: handleRename,
  rm: handleRm,
  os: handleOs,
  cp: handleCp,
  mv: handleMv,
  // hash: handleHash,
  // compress: handleCompress,
  // decompress: handleDecompress,
  ls: handleLs,
  up: handleUp,
  cd: handleCd,
};
