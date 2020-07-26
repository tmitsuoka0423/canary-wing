import React from 'react';
import styles from './styles.scss';

interface IProps {
  label: string;
  imgSrc: string;
}

const SwitchItem: React.FC<IProps> = (props: IProps) => {
  return (
    <div className={styles.SwitchItem}>
      <img src={props.imgSrc} className={styles.Icon}></img>
      <div className={styles.Label}>{props.label}</div>
    </div>
  );
};

export default SwitchItem;
