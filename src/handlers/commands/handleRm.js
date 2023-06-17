import path from 'path';
import { rm } from 'fs/promises';

export const handleRm = async ([pathToFile]) => {
  await rm(path.resolve(pathToFile));
};
