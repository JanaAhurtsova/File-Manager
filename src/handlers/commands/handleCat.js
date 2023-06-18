import { createReadStream } from 'fs';
import path from 'path';
import { Operation_Failed } from '../../constants/errors/Errors.js';

export const handleCat = async ([pathTo]) => {
  const readStream = createReadStream(path.resolve(pathTo), 'utf-8');
  readStream.on('data', (chunk) => {
    console.log(chunk);
  });
  readStream.on('error', () => {
    console.log(Operation_Failed);
  });
};
