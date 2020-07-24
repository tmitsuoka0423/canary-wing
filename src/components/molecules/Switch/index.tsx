import React from 'react';
import styles from './styles.scss';

const Switch: React.FC = () => {
  return (
    <div className={styles.Switch}>
      <div className={`${styles.SwitchItem}`}>
        <img src={'./images/chrome.png'} className={styles.Icon}></img>
        <div className={styles.Label}>Chrome</div>
      </div>
      <div className={`${styles.SwitchItem} ${styles.Selected}`}>
        <img src={'./images/chrome-canary.png'} className={styles.Icon}></img>
        <div className={styles.Label}>Chrome Canary</div>
      </div>
    </div>
  );
};

export default Switch;
