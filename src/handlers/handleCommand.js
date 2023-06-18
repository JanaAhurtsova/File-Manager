import { commandsMap } from './commandsMap.js';
import { createFunc } from '../libs/asyncWrapper/asyncWrapper.js';
import { Commands, Exit } from '../constants/commands/Commands.js';
import { Invalid_Input } from '../constants/errors/Errors.js';

export const handleCommand = async (input, rl) => {
  try {
    const argsArr = input.trim().split(' ');
    const [command, ...args] = argsArr;

    if(Commands.includes(command)) {
      await createFunc(commandsMap[command], args);
    } else if(command === Exit) {
      rl.close();
    } else {
      console.log(Invalid_Input);
    }
  } catch(err) {
    console.log(err.message);
  }
}
