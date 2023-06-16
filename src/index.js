import { homedir } from 'os';
import readline from 'readline/promises';
import {
  stdin as input,
  stdout as output,
} from 'process';
import { getName } from './handlers/getName.js';

process.chdir(homedir());

const name = getName();
console.log(`Welcome to the File Manager, ${name}!`);
console.info(`You are currently in ${process.cwd()}`);

const rl = readline.createInterface({ input, output });

rl.on('line', (input) => {
  if(input.trim() === 'exit') {
    rl.close();
  }
})
  .on('SIGINT', () => rl.close())
  .on('close', () => {
    console.log(`Thank you for using File Manager, ${name}, goodbye!`);
    process.nextTick(() => process.exit());
  });
