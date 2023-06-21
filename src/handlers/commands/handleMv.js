import { handleCp } from './handleCp.js';
import { handleRm } from './handleRm.js';

export const handleMv = async([pathToFile, pathToNewDirectory]) => {
  await handleCp([pathToFile, pathToNewDirectory]);
  await handleRm([pathToFile]);
};
