import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { flexBox } from '../../../styles/mixin';

interface Props {
  size: number;
  productData: {
    thumbnailImageUrl: string;
    modelNumber: string;
    enName: string;
    krName: string;
    sellNow: string;
    buyNow: string;
  };
}

const SellButton = ({ size, productData }: Props) => {
  const navigate = useNavigate();

  const onSellClick = () => {
    navigate('/sell/select');
  };

  return (
    <SellBtn onClick={onSellClick}>
      <BtnTitle size={size}>판매</BtnTitle>
      <BtnText>
        <BtnPrice>
          {Math.floor(Number(productData?.sellNow)).toLocaleString()}원
        </BtnPrice>
        <BtnType>즉시 판매가</BtnType>
      </BtnText>
    </SellBtn>
  );
};

export default SellButton;

const SellBtn = styled.a`
  ${flexBox('', 'center', '')}
  position: relative;
  width: 50%;
  margin-left: 10px;
  border-radius: 10px;
  color: #fff;
  background-color: ${({ theme }) => theme.buttonSell};
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
