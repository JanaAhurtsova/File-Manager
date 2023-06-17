import { createReadStream } from 'fs';
import path from 'path';
import { pipeline } from 'stream/promises';

export const handleCat = async ([pathTo]) => {
  const readStream = createReadStream(path.resolve(pathTo), 'utf-8');
  await pipeline(readStream, process.stdout, { end: true });
};
