import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import path from 'path';
import { createBrotliDecompress } from 'zlib';

export const handleDecompress = async ([pathToFile, pathToDestination]) => {
  const { base } = path.parse(pathToFile);
  const decompressFileName = base.replace('.br', '');
  const decompressPath = path.resolve(pathToDestination, decompressFileName);
  const readStream = createReadStream(path.resolve(pathToFile));
  const writeStream = createWriteStream(decompressPath);
  await pipeline(readStream, createBrotliDecompress(), writeStream);
};
