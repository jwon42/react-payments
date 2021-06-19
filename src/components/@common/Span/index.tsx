import React from 'react';
import './Span.scss';

const Span = (props: { value: string }) => {
  return <span className="span">{props.value}</span>;
};

export default Span;
