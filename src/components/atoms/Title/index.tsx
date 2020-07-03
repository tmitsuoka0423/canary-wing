import React from 'react';
import styles from './styles.scss';

interface IProps {
  children: string;
}

const Title: React.FC<IProps> = (props: IProps) => {
  return <div className={styles.title}>{props.children}</div>;
};

export default Title;
