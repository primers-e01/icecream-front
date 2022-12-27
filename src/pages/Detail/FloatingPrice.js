import React from 'react';
import styled from 'styled-components';
import { flexBox } from '../../styles/mixin';
import BuyButton from './components/BuyButton';
import SellButton from './components/SellButton';

const FloatingPrice = () => {
  return (
    <Wrapper>
      <ItemBox>
        <ItemImg src="http://placeimg.com/640/640/nature" />
        <ItemDescription>
          <ItemEnglishName>Jordan 1 Retro High OG Chicago 2022</ItemEnglishName>
          <ItemKoreanName>조던 1 레트로 하이 OG 시카고 2022</ItemKoreanName>
        </ItemDescription>
      </ItemBox>
      <BtnBox>
        <BuyButton size={15} />
        <SellButton size={15} />
      </BtnBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${flexBox('space-between', 'center', '')}
  position: fixed;
  top: 99px;
  left: 0;
  right: 0;
  padding: 0 40px 15px;
  background-color: #fff;
  z-index: 100;
  box-shadow: 0 4px 4px 0px rgb(0 0 0 / 10%);
`;

const ItemBox = styled.div`
  ${flexBox('', 'center', '')}
  height: 64px;
`;

const ItemImg = styled.img`
  height: 100%;
  border-radius: 12px;
`;

const ItemDescription = styled.div`
  margin-left: 12px;
`;

const ItemEnglishName = styled.span`
  display: block;
  font-size: 15px;
  line-height: 18px;
`;
const ItemKoreanName = styled.span`
  font-size: 12px;
  margin-top: 4px;
  color: ${({ theme }) => theme.mainBrandGray05};
`;

const BtnBox = styled.div`
  display: flex;
  width: 400px;
  height: 50px;
`;

export default FloatingPrice;
