import React from 'react';
import './Header.scss';

function Header(props: { name: string }) {
  return <div className="Header">{props.name}</div>;
}

export default Header;
