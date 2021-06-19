import React from 'react';
import './Input.scss';

const Input = (props: IInput) => {
  const styleType: string = props.styleType ? 'input-' + props.styleType : 'input';

  return (
    <input
      className={styleType}
      onChange={props.onChange}
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
    ></input>
  );
};

interface IInput {
  styleType: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: any;
}

Input.defaultProps = {
  styleType: '',
  placeholder: '',
  // onChange: any;
};

export default Input;
