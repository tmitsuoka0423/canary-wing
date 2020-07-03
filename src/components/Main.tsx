import React, { useState, useEffect } from 'react';
import { Button, Checkbox } from './atoms';
import { exec } from 'child_process';

const Main: React.FC = () => {
  const [command, setCommand] = useState('/Applications/Google\\ Chrome\\ Canary.app/Contents/MacOS/Google\\ Chrome\\ Canary');
  const [incognito, setIncognito] = useState(true);
  const [autoOpenDevtoolsForTabs, setAutoOpenDevtoolsForTabs] = useState(false);
  const [ignoreCertificateErrors, setIgnoreCertificateErrors] = useState(true);
  const [disableWebSecurity, setDisableWebSecurity] = useState(false);

  useEffect(() => {
    updateCommand();
  });

  const onLaunchClick = () => {
    exec('killall Google\\ Chrome\\ Canary', err => {
      if (err) {
        console.debug('chrome canary is not launched');
      } else {
        console.debug('killed google chrome canary');
      }
      exec(command, (err, stdout) => {
        if (err) throw err;
        console.debug(stdout);
      });
    });
  };

  const updateCommand = () => {
    const options = [];

    if (incognito) {
      options.push('--incognito');
    }
    if (autoOpenDevtoolsForTabs) {
      options.push('--auto-open-devtools-for-tabs');
    }
    if (ignoreCertificateErrors) {
      options.push('--ignore-certificate-errors');
    }
    if (disableWebSecurity) {
      options.push('--disable-web-security');
    }

    setCommand(`/Applications/Google\\ Chrome\\ Canary.app/Contents/MacOS/Google\\ Chrome\\ Canary ${options.join(' ')}`);
  };

  return (
    <div>
      <div>$ {command}</div>
      <Checkbox
        checked={incognito}
        onChange={event => {
          setIncognito(event.target.checked);
          updateCommand();
        }}>
        シークレットモード
      </Checkbox>
      <Checkbox
        checked={autoOpenDevtoolsForTabs}
        onChange={event => {
          setAutoOpenDevtoolsForTabs(event.target.checked);
          updateCommand();
        }}>
        開発者ツール
      </Checkbox>
      <Checkbox
        checked={ignoreCertificateErrors}
        onChange={event => {
          setIgnoreCertificateErrors(event.target.checked);
          updateCommand();
        }}>
        SSL証明書エラーを無視
      </Checkbox>
      <Checkbox
        checked={disableWebSecurity}
        onChange={event => {
          setDisableWebSecurity(event.target.checked);
          updateCommand();
        }}>
        CORSエラーを無視
      </Checkbox>
      <Button onClick={onLaunchClick}>起動</Button>
    </div>
  );
};

export default Main;
