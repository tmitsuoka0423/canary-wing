import React from 'react';
import styles from './styles.scss';

interface IProps {
  isChromeCanary: boolean;
  onClick: () => void;
}

const Switch: React.FC<IProps> = (props: IProps) => {
  return (
    <label htmlFor="switch" className={styles.Switch}>
      <input type="checkbox" id="switch" onClick={props.onClick} checked={props.isChromeCanary} />
      <span className={styles.Slider}></span>
    </label>
  );
};

export default Switch;
