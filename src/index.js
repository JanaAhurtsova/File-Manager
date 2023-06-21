import { homedir } from 'os';
import { getName } from './libs/getName/getName.js';
import { createReadline } from './handlers/createReadline.js';

process.chdir(homedir());

const name = getName();
console.log(`Welcome to the File Manager, ${name}!`);
console.info(`You are currently in ${process.cwd()}`);

createReadline(name);
