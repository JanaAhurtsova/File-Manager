import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import path from 'path';
import { createBrotliCompress } from 'zlib';

export const handleCompress = async ([pathToFile, pathToDestination]) => {
  const { base } = path.parse(pathToFile);
  const compressFileName = `${base}.br`;
  const compressPath = path.resolve(pathToDestination, compressFileName);
  const readStream = createReadStream(path.resolve(pathToFile));
  const writeStream = createWriteStream(compressPath);
  await pipeline(readStream, createBrotliCompress(), writeStream);
};
