import { defaultUsername } from "../constants/name/Name.js";

export const getName = () => {
  const username = process.argv.slice(2).map((arg) => {
    const name = arg.split('=');
    return name.at(-1);
  }).join('');

  return username ? username : defaultUsername;
};
