import React from 'react';
import './Card.scss';

const Card = (props: IFormInfo) => {
  // const cardNumber: string = Object.values(props.cardNumber).join(' ');
  // const cardOwner: string = Object.values(props.cardOwner).join(' ').toUpperCase();
  // const cardExpiredDate: string = Object.values(props.cardExpiredDate).join('/');

  // let data: object = props.formData;
  // console.log(data);
  return (
    <>
      <div className="card color__default">
        <div className="card__header">
          <div>42 CARD</div>
        </div>
        <div className="card__body">
          <div className="card__body__ic"></div>
          <div className="card__body__number-container">
            <div className="card__body__number-container__element">{props.cardNumberFirst}</div>
            <div className="card__body__number-container__element">{props.cardNumberSecond}</div>
            <div className="card__body__number-container__element">{props.cardNumberThird}</div>
            <div className="card__body__number-container__element">{props.cardNumberFourth}</div>
          </div>
        </div>
        <div className="card__footer">
          <div className="card__footer__owner-name-container">
            <div className="card__footer__owner-name-container__element">{props.cardOwnerName}</div>
          </div>
          <div className="card__footer__expired-date-container">
            <div className="card__footer__expired-date-container__element">{props.cardExpiredDateMonth}</div>
            <span>/</span>
            <div className="card__footer__expired-date-container__element">{props.cardExpiredDateYear}</div>
          </div>
        </div>
      </div>
    </>
  );
};
interface IFormInfo {
  cardNumberFirst: string | null;
  cardNumberSecond: string | null;
  cardNumberThird: string | null;
  cardNumberFourth: string | null;
  cardExpiredDateMonth: string | null;
  cardExpiredDateYear: string | null;
  cardOwnerName: string | null;
  cvc: string | null;
  passWordFirst: string | null;
  passWordSecond: string | null;
  passWordThird: string | null;
  passWordFourth: string | null;
}

Card.defaultProps = {
  cardNumberFirst: '1234',
  cardNumberSecond: '5678',
  cardNumberThird: '••••',
  cardNumberFourth: '••••',
  cardExpiredDateMonth: 'MM',
  cardExpiredDateYear: 'YY',
  cardOwnerFirstName: 'junho',
  cardOwnerLastName: 'won',
  cvc: '',
  passWordFirst: '',
  passWordSecond: '',
  passWordThird: '',
  passWordFourth: '',
};

export default Card;
