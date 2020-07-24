import React from 'react';
import styles from './styles.scss';

interface IProps {
  children: string;
  checked: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<IProps> = (props: IProps) => {
  return (
    <div className={styles.checkbox}>
      <label>
        <input type="checkbox" checked={props.checked} onChange={props.onChange} />
        <span className={styles.label}>{props.children}</span>
      </label>
    </div>
  );
};

export default Checkbox;
