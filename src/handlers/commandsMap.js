import * as handler from './commands/index.js';

export const commandsMap = {
  cat: handler.handleCat,
  add: handler.handleAdd,
  rn: handler.handleRename,
  rm: handler.handleRm,
  os: handler.handleOs,
  cp: handler.handleCp,
  mv: handler.handleMv,
  hash: handler.handleHash,
  // compress: handleCompress,
  // decompress: handleDecompress,
  ls: handler.handleLs,
  up: handler.handleUp,
  cd: handler.handleCd,
};
