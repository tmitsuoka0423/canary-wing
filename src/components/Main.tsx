import React, { useState, useEffect } from 'react';
import { Button, Checkbox } from './atoms';
import { Switch } from './molecules';
import { exec } from 'child_process';
import styles from './styles.scss';

const Main: React.FC = () => {
  const [command, setCommand] = useState('/Applications/Google\\ Chrome\\ Canary.app/Contents/MacOS/Google\\ Chrome\\ Canary');
  const [isChrome, setIsChrome] = useState(false);
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

  const toggleIsChrome = () => {
    setIsChrome(!isChrome);
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
      <div className={styles.margin}>
        <Switch isChrome={isChrome} onClick={toggleIsChrome}></Switch>
      </div>
      <div className={`${styles.main} ${styles.margin}`}>
        <Checkbox
          checked={ignoreCertificateErrors}
          onChange={event => {
            setIgnoreCertificateErrors(event.target.checked);
            updateCommand();
          }}>
          SSL証明書エラーを無視
        </Checkbox>
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
          開発者ツールを表示
        </Checkbox>
        <Checkbox
          checked={disableWebSecurity}
          onChange={event => {
            setDisableWebSecurity(event.target.checked);
            updateCommand();
          }}>
          CORSエラーを無視
        </Checkbox>
      </div>

      <div className={styles.margin}>
        <Button onClick={onLaunchClick}>起動</Button>
      </div>
    </div>
  );
};

export default Main;
