import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { flexBox } from '../../../styles/mixin';

interface Props {
  size: number;
  //TODO: 데이터 확인 후 타입 수정
  productData: {
    thumbnailImageUrl: string;
    modelNumber: string;
    enName: string;
    krName: string;
    sellNow: number;
    buyNow: number;
  };
}

const BuyButton = ({ size, productData }: Props) => {
  const navigate = useNavigate();

  const buyNow = Math.floor(productData?.buyNow).toLocaleString();

  const onBuyClick = () => {
    navigate('/buy/select');
  };

  return (
    <BuyBtn onClick={onBuyClick}>
      <BtnTitle size={size}>구매</BtnTitle>
      <BtnText>
        <BtnPrice>{buyNow}원</BtnPrice>
        <BtnType>즉시 구매가</BtnType>
      </BtnText>
    </BuyBtn>
  );
};

export default BuyButton;

const BuyBtn = styled.a`
  ${flexBox('flex-start')}
  position: relative;
  width: 50%;
  border-radius: 10px;
  color: #fff;
  background-color: ${({ theme }) => theme.buttonBuy};
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 55px;
    width: 1px;
    background-color: rgba(34, 34, 34, 0.1);
  }
`;

const BtnTitle = styled.strong<{ size: number }>`
  width: 55px;
  font-weight: 700;
  font-size: ${props => props.size}px;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
`;

const BtnText = styled.span`
  margin-left: 10px;
`;

const BtnPrice = styled.span`
  display: block;
  font-size: 15px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.8);
`;

const BtnType = styled.span`
  font-size: 11px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
`;
