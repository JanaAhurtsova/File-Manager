import { homedir } from 'os';
import { getName } from './handlers/getName.js';

process.chdir(homedir());

const name = getName();
console.log(`Welcome to the File Manager, ${name}!`);
