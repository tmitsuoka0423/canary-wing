import React, { useState } from 'react';
import Button from './atoms/Button/Button';
import { exec } from 'child_process';

const Main: React.FC = () => {
  const [incognito, setIncognito] = useState(false);
  const [autoOpenDevtoolsForTabs, setAutoOpenDevtoolsForTabs] = useState(false);
  const [ignoreCertificateErrors, setIgnoreCertificateErrors] = useState(false);
  const [disableWebSecurity, setDisableWebSecurity] = useState(false);

  const onLaunchClick = () => {
    exec('killall Google\\ Chrome\\ Canary', err => {
      if (err) {
        console.debug('chrome canary is not launched');
      } else {
        console.debug('killed google chrome canary');
      }
      exec(
        '/Applications/Google\\ Chrome\\ Canary.app/Contents/MacOS/Google\\ Chrome\\ Canary --incognito --auto-open-devtools-for-tabs --ignore-certificate-errors',
        (err, stdout) => {
          if (err) throw err;
          console.debug(stdout);
        },
      );
    });
  };

  return (
    <div>
      <div>Chrome Canary</div>
      <div>
        <label>
          <input type="checkbox" checked={incognito} onClick={() => setIncognito(!incognito)} />
          シークレットモード
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={autoOpenDevtoolsForTabs} onClick={() => setAutoOpenDevtoolsForTabs(!autoOpenDevtoolsForTabs)} />
          開発者ツール
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={ignoreCertificateErrors} onClick={() => setIgnoreCertificateErrors(!ignoreCertificateErrors)} />
          SSL証明書エラーを無視
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={disableWebSecurity} onClick={() => setDisableWebSecurity(!disableWebSecurity)} />
          CORSエラーを無視
        </label>
      </div>
      <Button onClick={onLaunchClick}>起動</Button>
    </div>
  );
};

export default Main;
