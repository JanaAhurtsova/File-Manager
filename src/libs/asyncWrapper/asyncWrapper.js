export const createFunc = async (fn, args) => {
  try {
    args ? await fn(args) : await fn();
    console.info(`You are currently in ${process.cwd()}`);
  } catch(err) {
    console.log('Operation failed');
  }
};
