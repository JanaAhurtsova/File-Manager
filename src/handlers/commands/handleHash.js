import path from 'path';
import { readFile } from 'fs/promises';
import { createHash } from 'crypto';

export const handleHash = async ([pathToFile]) => {
  const content = await readFile(path.resolve(pathToFile));
  const hash = createHash('SHA256').update(content).digest('hex');
  console.log(hash);
};
