import React from 'react';
import styles from './styles.scss';

interface IProps {
  src: string;
  alt: string;
  onclick?: () => void;
}

const Icon: React.FC<IProps> = (props: IProps) => {
  return <img src={props.src} alt={props.alt} onClick={props.onclick} className={styles.Icon} />;
};

export default Icon;
