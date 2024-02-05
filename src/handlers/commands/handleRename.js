import { rename } from 'fs/promises';

export const handleRename = async ([oldName, newName]) => {
  await rename(oldName, newName);
}
