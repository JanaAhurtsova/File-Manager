export const createFunc = async (fn) => {
  try {
    await fn();
    console.info(`You are currently in ${process.cwd()}`);
  } catch(err) {
    console.log('Operation failed');
  }
};
