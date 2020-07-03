import React from 'react';
// import styles from './styles.scss';

interface IProps {
  children: string;
  checked: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<IProps> = (props: IProps) => {
  return (
    <div>
      <label>
        <input type="checkbox" checked={props.checked} onChange={props.onChange} />
        {props.children}
      </label>
    </div>
  );
};

export default Checkbox;
