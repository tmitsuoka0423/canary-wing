import React from 'react';
import styles from './styles.scss';

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button {...props} className={styles.button} />;
};

export default Button;
