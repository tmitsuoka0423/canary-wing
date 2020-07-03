import React from 'react';
import styles from './styles.scss';

interface IProps {
  children: Element[];
}

const Card: React.FC<IProps> = (props: IProps) => {
  return <div className={styles.card}>{props.children}</div>;
};

export default Card;
