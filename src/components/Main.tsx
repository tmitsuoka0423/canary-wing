import React, { useState } from 'react';
import { Button, Checkbox } from './atoms';
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
      <Checkbox checked={incognito} onClick={() => setIncognito(!incognito)}>
        シークレットモード
      </Checkbox>
      <Checkbox checked={autoOpenDevtoolsForTabs} onClick={() => setAutoOpenDevtoolsForTabs(!autoOpenDevtoolsForTabs)}>
        開発者ツール
      </Checkbox>
      <Checkbox checked={ignoreCertificateErrors} onClick={() => setIgnoreCertificateErrors(!ignoreCertificateErrors)}>
        SSL証明書エラーを無視
      </Checkbox>
      <Checkbox checked={disableWebSecurity} onClick={() => setDisableWebSecurity(!disableWebSecurity)}>
        CORSエラーを無視
      </Checkbox>
      <Button onClick={onLaunchClick}>起動</Button>
    </div>
  );
};

export default Main;
