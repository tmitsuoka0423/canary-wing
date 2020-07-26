import React from 'react';
import styles from './styles.scss';

interface IProps {
  isChrome: boolean;
  onClick: () => void;
}

const Switch: React.FC<IProps> = (props: IProps) => {
  return (
    <div className={`${styles.Switch} ${styles.Switcher}`}>
      <input type="checkbox" id="switch" onClick={props.onClick} checked={props.isChrome} />
      <label htmlFor="switch"></label>
    </div>
  );
};

export default Switch;
