import { EOL, cpus, userInfo } from 'os';
import { Invalid_Input } from '../../constants/errors/Errors.js';
import { Params } from '../../constants/osParams/Params.js';

export const handleOs = async ([params]) => {
  const cpusUser = cpus().map(({ model, speed }) => ({
    model,
    speed: `${speed/1000}GHz`
  }));
  
  const { username, homedir } = userInfo();

  switch(params) {
    case Params.EOL:
      console.log(JSON.stringify(EOL));
      break;
    case Params.cpus:
      console.table(cpusUser);
      break;
    case Params.homedir:
      console.log(homedir);
      break;
    case Params.username:
      console.log(username);
      break;
    case Params.architecture:
      console.log(process.arch);
      break;
    default:
      console.log(Invalid_Input);
  }
}
