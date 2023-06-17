import { commandsMap } from './commandsMap.js';
import { createFunc } from '../libs/asyncWrapper/asyncWrapper.js';
import { Commands } from '../constants/commands/Commands.js';

export const handleCommand = async (input, rl) => {
  try {
    const argsArr = input.trim().split(' ');
    const [command, ...args] = argsArr;

    if(Commands.includes(command)) {
      await createFunc(commandsMap[command], args);
    } else if(command === '.exit') {
      rl.close();
    } else {
      console.log('Invalid input');
    }
  } catch(err) {
    console.log(err.message);
  }
}
