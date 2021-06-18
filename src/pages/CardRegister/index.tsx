import React from 'react';
import Header from '../Header';
import Card from '../../components/Card';
import './CardRegister.scss';

function CardRegister() {
  return (
    <>
      <Header name="카드 추가" />
      <div className="card-container">
        <Card />
        <Card />
      </div>
      <div className="card-form-container"></div>
    </>
  );
}

export default CardRegister;
