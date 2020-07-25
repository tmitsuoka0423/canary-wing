import React from 'react';
import styles from './styles.scss';

interface IProps {
  label: string;
  imgSrc: string;
  selected?: boolean;
}

const SwitchItem: React.FC<IProps> = (props: IProps) => {
  return (
    <div className={`${styles.SwitchItem} ${props.selected ? styles.Selected : ''}`}>
      <img src={props.imgSrc} className={styles.Icon}></img>
      <div className={styles.Label}>
        {props.label} {props.selected}
      </div>
    </div>
  );
};

export default SwitchItem;
