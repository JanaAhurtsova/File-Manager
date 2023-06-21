import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import path from 'path';

export const handleCp = async ([from, to]) => {
  const { base } = path.parse(from);
  const pathForCopy = path.resolve(to, base);
  const readStream = createReadStream(path.resolve(from));
  const writeStream = createWriteStream(pathForCopy);
  await pipeline(readStream, writeStream);
}
