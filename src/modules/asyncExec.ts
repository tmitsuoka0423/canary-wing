import * as childProcess from 'child_process';

export default (command: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    childProcess.exec(command, (error, stdout) => {
      if (error) {
        return reject(error);
      }

      return resolve(stdout);
    });
  });
};
