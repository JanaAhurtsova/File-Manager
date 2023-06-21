import path from 'path';
import { readdir } from 'fs/promises';

export const handleLs = async () => {
  const currentDir = path.resolve(process.cwd());
  const files = await readdir(currentDir, {
    withFileTypes: true,
  });

  const filteredList = files.filter((file) => file.isDirectory() || file.isFile());

  const filesTable = filteredList.map((file) => {
    if(file.isDirectory()) {
      return { Name: file.name, Type: 'directory'};
    }
    if(file.isFile()) {
      return { Name: file.name, Type: 'file'};
    }
  });

  const sortTable = filesTable.sort((a, b) => {
    if(a.Type != b.Type) {
      return a.Type > b.Type ? 1 : -1;
    } else {
      return a.Name.toLowerCase() > b.Name.toLowerCase() ? 1 : -1;
    }
  });
  console.table(sortTable);
}
