import React, { useState, useEffect } from 'react';
import { Button, Checkbox } from './atoms';
import { Switch } from './molecules';
import { exec } from 'child_process';
import styles from './styles.scss';

const Main: React.FC = () => {
  const [command, setCommand] = useState('');
  const [isChromeCanary, setIsChromeCanary] = useState(true);
  const [incognito, setIncognito] = useState(true);
  const [autoOpenDevtoolsForTabs, setAutoOpenDevtoolsForTabs] = useState(false);
  const [ignoreCertificateErrors, setIgnoreCertificateErrors] = useState(true);
  const [disableWebSecurity, setDisableWebSecurity] = useState(false);

  useEffect(() => {
    updateCommand();
  });

  const onLaunchClick = () => {
    const target: string = isChromeCanary ? 'Google\\ Chrome\\ Canary' : 'Google\\ Chrome';

    exec(`killall ${target}`, err => {
      if (err) {
        console.debug('chrome is not launched');
      } else {
        console.debug('killed google chrome');
      }
      exec(command, (err, stdout) => {
        if (err) throw err;
        console.debug(stdout);
      });
    });
  };

  const toggleIsChrome = () => {
    setIsChromeCanary(!isChromeCanary);
  };

  const updateCommand = () => {
    const target: string = isChromeCanary
      ? '/Applications/Google\\ Chrome\\ Canary.app/Contents/MacOS/Google\\ Chrome\\ Canary'
      : '/Applications/Google\\ Chrome.app/Contents/MacOS/Google\\ Chrome';

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

    setCommand(`${target} ${options.join(' ')}`);
  };

  return (
    <div>
      <div className={styles.margin}>
        <Switch isChromeCanary={isChromeCanary} onClick={toggleIsChrome}></Switch>
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
