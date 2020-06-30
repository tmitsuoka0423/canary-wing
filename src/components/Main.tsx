import React from 'react';
import Button from './atoms/Button/Button';
import { exec } from 'child_process';

const Main: React.FC = () => {
  const onLaunchClick = () => {
    exec(
      '/Applications/Google\\ Chrome\\ Canary.app/Contents/MacOS/Google\\ Chrome\\ Canary --incognito --auto-open-devtools-for-tabs --ignore-certificate-errors',
      (err, stdout) => {
        if (err) throw err;
        console.log(stdout);
      },
    );
  };

  return (
    <div>
      <div>Chrome Canary</div>
      <div>
        <label>
          <input type="checkbox" checked />
          シークレットモード
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" checked />
          開発者ツール
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" checked />
          SSL証明書エラーを無視
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" />
          CORSエラーを無視
        </label>
      </div>
      <Button onClick={onLaunchClick}>起動</Button>
    </div>
  );
};

export default Main;
