import path from 'path';
import { writeFile } from 'fs/promises';

export const handleAdd = async([fileName]) => {
  const newFilePath = path.resolve(process.cwd(), fileName);
  await writeFile(newFilePath, '', { flag: 'wx' });
};
