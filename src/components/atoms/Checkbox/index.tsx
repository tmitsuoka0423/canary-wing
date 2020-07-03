import React from 'react';
// import styles from './styles.scss';

interface IProps {
  children: string;
  checked: boolean;
  onClick?: () => void;
}

const Checkbox: React.FC<IProps> = (props: IProps) => {
  return (
    <div>
      <label>
        <input type="checkbox" checked={props.checked} onClick={props.onClick} />
        {props.children}
      </label>
    </div>
  );
};

export default Checkbox;
