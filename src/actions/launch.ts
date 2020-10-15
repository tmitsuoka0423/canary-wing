import asyncExec from '../modules/asyncExec';
import Options from '../modules/Options';

export default async (options: Options): Promise<void> => {
  try {
    await asyncExec(`killall Google\\ Chrome\\ Canary`).catch(() => {
      /* 終了失敗の例外は握りつぶす */
    });
    await asyncExec(`/Applications/Google\\ Chrome\\ Canary.app/Contents/MacOS/Google\\ Chrome\\ Canary ${options.getOptions()}`);
  } catch (e) {
    console.error(e);
    throw e;
  }
};
