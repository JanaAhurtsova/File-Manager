import readline from 'readline/promises';
import {
  stdin as input,
  stdout as output,
} from 'process';
import { handleCommand } from './handleCommand.js';

export const createReadline = (name) => {
  const rl = readline.createInterface({ input, output });

  rl.on('line', async (input) => {
    await handleCommand(input, rl);
  })
    .on('SIGINT', () => rl.close())
    .on('close', () => {
      console.log(`Thank you for using File Manager, ${name}, goodbye!`);
      process.nextTick(() => process.exit());
    });
}
