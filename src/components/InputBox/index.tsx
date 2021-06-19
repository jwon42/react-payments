import React, { ReactNode } from 'react';
import './InputBox.scss';

const InputBox = (props: IInputBox) => {
  let title = '';
  let message = '';
  let type = '';

  if (props.dataType === 'cardNumber') {
    title = '카드 번호';
    message = '카드 번호 에러메세지';
    type = 'card-number';
  } else if (props.dataType === 'cardExpiredDate') {
    title = '카드 유효기간';
    message = '카드 유효기간 에러메세지';
    type = 'card-expired-date';
  } else if (props.dataType === 'cardOwner') {
    title = '소유자 이름';
    message = '소유자 이름 에러메세지';
    type = 'card-owner';
  } else if (props.dataType === 'cvc') {
    title = '보안 코드(CVC/CVV)';
    message = '보안 코드 에러메세지';
    type = 'card-cvc';
  } else if (props.dataType === 'passWord') {
    title = '비밀번호';
    message = '비밀번호 에러메세지';
    type = 'card-password';
  }

  return (
    <>
      <div className="input-box">
        <div className="input-box__header">
          <div className="input-box__header__title">{title}</div>
          <div className="input-box__header__message">{message}</div>
        </div>
        <div className={`input-box__body type__${type}`}>{props.children}</div>
      </div>
    </>
  );
};

interface IInputBox {
  dataType: string;
  children: ReactNode;
}

InputBox.defaultProps = {
  dataType: '',
};

export default InputBox;
