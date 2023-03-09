import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { flexBox } from '../../../styles/mixin';

interface Props {
  size: number;
  productData?: {
    thumbnailImageUrl: string;
    modelNumber: string;
    enName: string;
    krName: string;
    sellNow: string;
    buyNow: string;
  };
  width: string;
}

const BuyButton = ({ size, productData, width }: Props) => {
  const navigate = useNavigate();

  const buyNow = Math.floor(Number(productData?.buyNow)).toLocaleString();

  const onBuyClick = () => {
    navigate('/buy/select');
  };

  return (
    <BuyBtn width={width} onClick={onBuyClick}>
      <BtnTitle size={size}>구매</BtnTitle>
      <BtnText>
        <BtnPrice>{buyNow}원</BtnPrice>
        <BtnType>즉시 구매가</BtnType>
      </BtnText>
    </BuyBtn>
  );
};

export default BuyButton;

const BuyBtn = styled.a<{ width: string }>`
  ${flexBox('flex-start')}
  position: relative;
  width: ${props => props.width};
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
