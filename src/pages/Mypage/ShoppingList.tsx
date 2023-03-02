import React from 'react';
import styled from 'styled-components';

const ShoppingList = () => {
  return (
    <ShoppingListContainer>
      <Title>구매 내역</Title>
    </ShoppingListContainer>
  );
};

export default ShoppingList;

const ShoppingListContainer = styled.div`
  display: flex;

  padding: 70px;
  overflow: hidden;
  min-height: 380px;
`;

const Title = styled.div`
  height: 50px;
  line-height: 29px;
  font-size: 24px;
  letter-spacing: -0.36px;
  padding-bottom: 16px;
  padding-right: 900px;
  border-bottom: 3px solid #222;
`;
