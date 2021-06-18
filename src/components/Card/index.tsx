import React from 'react';
import './Card.scss';

const Card = (props: ICard) => {
  const cardNumber: string = Object.values(props.info.cardNumber).join(' - ');
  const cardExpiredDate: string = Object.values(props.info.cardExpiredDate).join('/');

  return (
    <>
      <div className="card">
        <div className="card__header">
          <div>{props.cardCompany}</div>
        </div>
        <div className="card__body">
          <div className="card__body__ic"></div>
          <div className="card__body__number">{cardNumber}</div>
        </div>
        <div className="card__footer">
          <div>{props.info.cardOwner}</div>
          <div>{cardExpiredDate}</div>
        </div>
      </div>
    </>
  );
};

interface ICard {
  cardCompany: string;
  cardColor: string;
  info: {
    cardNumber: {
      first: string;
      second: string;
      third: string;
      fourth: string;
    };
    cardOwner: string;
    cardExpiredDate: {
      month: string;
      year: string;
    };
  };
}

Card.defaultProps = {
  cardCompany: 'KOREA',
  cardColor: '#b3b3b3',
  info: {
    cardNumber: {
      first: '1234',
      second: '1234',
      third: '1234',
      fourth: '1234',
    },
    cardOwner: 'GILDONG HONG',
    cardExpiredDate: {
      month: 'MM',
      year: 'YY',
    },
  },
};

export default Card;
