import { EOL, cpus, userInfo } from 'os';

export const handleOs = async ([params]) => {
  const cpusUser = cpus().map(({ model, speed }) => ({
    model,
    speed: `${speed/1000}GHz`
  }));
  
  const { username, homedir } = userInfo();

  switch(params) {
    case '--EOL':
      console.log(EOL);
      break;
    case '--cpus':
      console.table(cpusUser);
      break;
    case '--homedir':
      console.log(homedir);
      break;
    case '--username':
      console.log(username);
      break;
    case '--architecture':
      console.log(process.arch);
      break;
    default:
      console.log('Invalid input');
  }
}
