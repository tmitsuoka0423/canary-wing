import fs from 'fs';

export default async (): Promise<string> => {
  const buffer = await fs.promises.readFile('./package.json');

  const { version } = JSON.parse(buffer.toString());
  return version;
};
