import React, { useState } from 'react';
import Header from '../Header';
import './CardRegister.scss';

import Card from '../../components/Card';
import InputBox from '../../components/InputBox';
import Input from '../../components/@common/Input';
import Span from '../../components/@common/Span';

const CardRegister = () => {
  const [data, setData] = useState({
    cardNumberFirst: '',
    cardNumberSecond: '',
    cardNumberThird: '',
    cardNumberFourth: '',
    cardExpiredDateMonth: '',
    cardExpiredDateYear: '',
    cardOwnerName: '',
    cvc: '',
    passWordFirst: '',
    passWordSecond: '',
    passWordThird: '',
    passWordFourth: '',
  });

  const onChangeInput = (e: any) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
  };

  const {
    cardNumberFirst,
    cardNumberSecond,
    cardNumberThird,
    cardNumberFourth,
    cardExpiredDateMonth,
    cardExpiredDateYear,
    cardOwnerName,
    cvc,
    passWordFirst,
    passWordSecond,
    passWordThird,
    passWordFourth,
  } = data;

  return (
    <>
      <Header name="카드 추가" />
      <div className="card-container">
        <Card
          cardNumberFirst={cardNumberFirst}
          cardNumberSecond={cardNumberSecond}
          cardNumberThird={cardNumberThird}
          cardNumberFourth={cardNumberFourth}
          cardExpiredDateMonth={cardExpiredDateMonth}
          cardExpiredDateYear={cardExpiredDateYear}
          cardOwnerName={cardOwnerName}
          cvc={cvc}
          passWordFirst={passWordFirst}
          passWordSecond={passWordSecond}
          passWordThird={passWordThird}
          passWordFourth={passWordFourth}
        />
      </div>
      <div className="form-container">
        <InputBox dataType="cardNumber">
          <Input styleType="transparent" name="cardNumberFirst" value={cardNumberFirst} onChange={onChangeInput} />
          <Span value="-" />
          <Input styleType="transparent" name="cardNumberSecond" value={cardNumberSecond} onChange={onChangeInput} />
          <Span value="-" />
          <Input styleType="transparent" name="cardNumberThird" value={cardNumberThird} onChange={onChangeInput} />
          <Span value="-" />
          <Input styleType="transparent" name="cardNumberFourth" value={cardNumberFourth} onChange={onChangeInput} />
        </InputBox>
        <InputBox dataType="cardExpiredDate">
          <Input
            styleType="transparent"
            name="cardExpiredDateMonth"
            value={cardExpiredDateMonth}
            onChange={onChangeInput}
          />
          <Span value="/" />
          <Input
            styleType="transparent"
            name="cardExpiredDateYear"
            value={cardExpiredDateYear}
            onChange={onChangeInput}
          />
        </InputBox>
        <InputBox dataType="cardOwner">
          <Input styleType="transparent" name="cardOwnerName" value={cardOwnerName} onChange={onChangeInput} />
        </InputBox>
        <InputBox dataType="cvc">
          <Input styleType="transparent" name="cvc" value={cvc} onChange={onChangeInput} />
        </InputBox>
        <InputBox dataType="passWord">
          <Input styleType="transparent" name="passWordFirst" value={passWordFirst} onChange={onChangeInput} />
          <Input styleType="transparent" name="passWordSecond" value={passWordSecond} onChange={onChangeInput} />
          <Span value="•" />
          <Span value="•" />
        </InputBox>
      </div>
    </>
  );
};

export default CardRegister;
