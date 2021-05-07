import PropTypes from 'prop-types';
import { Header } from '../../components/commons/header/Header';
import { Button } from '../../components/commons/button/Button';
import { Card } from '../../components/commons/card/Card';
import Styled from './style';
import { PAGE } from '../../constants/page';
import { CreditCard } from '../../components/commons/card/CreditCard';
import { httpClient } from '../../api/httpClient';
import { PATH } from '../../constants/api';
import { useContext, useEffect } from 'react';
import CardDataContext from '../../context/CardDataContext';

const CardListPage = ({ cardList, setCardList, setEditCardId, resetCardInfo }) => {
  const { setCardInfo, setCurrentPage } = useContext(CardDataContext);

  const handleCardEdit = cardInfo => {
    setEditCardId(cardInfo.id);
    setCardInfo(cardInfo);
    setCurrentPage(PAGE.CARD_CREATION);
  };

  const handleCardDelete = async deleteId => {
    await httpClient.delete({ path: `${PATH.CARD_LIST}/${deleteId}` });

    setCardList(prevState => prevState.filter(card => card.id !== deleteId));
  };

  useEffect(() => {
    setEditCardId(null);
    resetCardInfo();
  }, [setEditCardId, resetCardInfo]);

  const creditCardList = cardList.map(card => (
    <Styled.CardItem key={card.id}>
      <CreditCard
        backgroundColor={card.selectedCardInfo.color}
        content={{
          cardType: card.selectedCardInfo.name,
          cardNumber: card.cardNumber,
          cardOwner: card.cardOwner,
          cardExpiredDate: card.cardExpiredDate,
        }}
      />
      <Styled.CardNickname>{card.cardNickname}</Styled.CardNickname>
      <Styled.ButtonContainer>
        <Button onClick={() => handleCardEdit(card)}>수정하기</Button>
        <Button onClick={() => handleCardDelete(card.id)}>삭제하기</Button>
      </Styled.ButtonContainer>
    </Styled.CardItem>
  ));

  return (
    <>
      <Header>보유카드</Header>
      <Styled.CardList>
        <Styled.CardItem>
          <Button onClick={() => setCurrentPage(PAGE.CARD_CREATION)}>
            <Card styles={{ boxShadow: 'none' }}>+</Card>
          </Button>
        </Styled.CardItem>
        {creditCardList}
      </Styled.CardList>
    </>
  );
};

CardListPage.propTypes = {
  cardList: PropTypes.arrayOf(PropTypes.object).isRequired,
  setCardList: PropTypes.func.isRequired,
  setEditCardId: PropTypes.func.isRequired,
  resetCardInfo: PropTypes.func.isRequired,
};

export default CardListPage;