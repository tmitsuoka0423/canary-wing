import React from 'react';
import { Icon } from '../../atoms';
import styles from './styles.scss';

interface IProps {
  imgSrc: string;
  label: string;
  onClick?: () => void;
}

const SwitchLabel: React.FC<IProps> = (props: IProps) => {
  return (
    <div className={styles.SwitchLabel}>
      <div className={styles.Icon}>
        <Icon src={props.imgSrc} alt={props.label}></Icon>
      </div>
      <span className={styles.Label}>{props.label}</span>
    </div>
  );
};

export default SwitchLabel;
