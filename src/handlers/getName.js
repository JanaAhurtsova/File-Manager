export const getName = () => {
  return process.argv.slice(2).map((arg) => {
    const name = arg.split('=');
    return name.at(-1);
  }).join('');
};
