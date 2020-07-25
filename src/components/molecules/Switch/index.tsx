import React from 'react';
import styles from './styles.scss';
import { SwitchItem } from '../../molecules';

const Switch: React.FC = () => {
  return (
    <div className={styles.Switch}>
      <SwitchItem label="Chrome" imgSrc={'./images/chrome.png'} selected></SwitchItem>
      <SwitchItem label="Chrome Canary" imgSrc={'./images/chrome-canary.png'}></SwitchItem>
    </div>
  );
};

export default Switch;
