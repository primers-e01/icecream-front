import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { flexBox } from '../../styles/mixin';
import { useAppSelector } from '../Detail/store/Store';
interface GroupedSellBidData {
  [size: string]: number;
}

interface Props {
  tradeType: string;
}

const SelectLayout = ({ tradeType }: Props) => {
  const [selectSize, setSelectSize] = useState<number | undefined>();
  const [selectedPrice, setSelectedPrice] = useState<number | undefined>();
  const ProductSlice = useAppSelector(state => state.ProductSlice);
  console.log('ProductSlice : ', ProductSlice);
  const sellBidDataAll = ProductSlice.tradeAll[0]?.sellBidDataAll;
  const buyBidDataAll = ProductSlice.tradeAll[0]?.buyBidDataAll;

  const groupedSellBidData = sellBidDataAll?.reduce<GroupedSellBidData>(
    (acc, { size, price }) => {
      const numberPrice = Number(price);
      if (acc[size] === undefined || acc[size] > numberPrice) {
        acc[size] = numberPrice;
      }
      return acc;
    },
    {}
  );

  const groupedBuyBidData = buyBidDataAll?.reduce<GroupedSellBidData>(
    (acc, { size, price }) => {
      const numberPrice = Number(price);
      if (acc[size] === undefined || acc[size] < numberPrice) {
        acc[size] = numberPrice;
      }
      return acc;
    },
    {}
  );

  const SIZE_BTN = [
    {
      size: 230,
      price:
        tradeType === 'sell'
          ? groupedSellBidData?.[230]
          : groupedBuyBidData?.[230],
    },
    {
      size: 240,
      price:
        tradeType === 'sell'
          ? groupedSellBidData?.[240]
          : groupedBuyBidData?.[240],
    },
    {
      size: 250,
      price:
        tradeType === 'sell'
          ? groupedSellBidData?.[250]
          : groupedBuyBidData?.[250],
    },
    {
      size: 260,
      price:
        tradeType === 'sell'
          ? groupedSellBidData?.[260]
          : groupedBuyBidData?.[260],
    },
    {
      size: 270,
      price:
        tradeType === 'sell'
          ? groupedSellBidData?.[270]
          : groupedBuyBidData?.[270],
    },
    {
      size: 280,
      price:
        tradeType === 'sell'
          ? groupedSellBidData?.[280]
          : groupedBuyBidData?.[280],
    },
  ];

  console.log('sell : ', groupedSellBidData);
  console.log('buy : ', groupedBuyBidData);

  const navigate = useNavigate();

  const onSizeClick = (size: number, price: number) => {
    setSelectSize(size);
    setSelectedPrice(price);
  };

  useEffect(() => {
    if (!ProductSlice.productData) {
      navigate('/products');
    }
  }, []);

  return (
    <BuyBackGround>
      <Title>{tradeType === 'sell' ? '판매하기' : '구매하기'}</Title>
      <BuyWrapper>
        <BuyBox>
          <ItemInfoBox>
            <ItemImg
              // TODO: 백 데이터로 수정
              src={ProductSlice.productData?.thumbnailImageUrl}
              alt="제품 이미지"
              width="80px"
              height="80px"
            />
            <ItemInfo>
              {/* TODO: 백 데이터로 수정 */}
              <ItemCode>{ProductSlice.productData?.modelNumber}</ItemCode>
              <ItemEnglishName>
                {ProductSlice.productData?.enName}
              </ItemEnglishName>
              <ItemKoreanName>
                {ProductSlice.productData?.krName}
              </ItemKoreanName>
            </ItemInfo>
          </ItemInfoBox>

          <ItemSelectBox>
            <SelectList>
              {SIZE_BTN.map(({ size, price }) => {
                return (
                  <SelectItem
                    onClick={() => onSizeClick(size, price)}
                    className={size === selectSize ? 'active' : ''}
                    key={size}
                  >
                    <SizeBtn>
                      <Size>{size}</Size>
                      <Price tradeType={tradeType}>
                        {price ? price.toLocaleString() : '-'}
                      </Price>
                    </SizeBtn>
                  </SelectItem>
                );
              })}
            </SelectList>
          </ItemSelectBox>

          {selectSize && (
            <BtnArea>
              <BtnBox
                onClick={() => navigate(`/${tradeType}?size=${selectSize}`)}
                tradeType={tradeType}
              >
                <Btn>
                  <BtnPrice>
                    {selectedPrice
                      ? selectedPrice.toLocaleString()
                      : '입찰하기'}
                  </BtnPrice>
                  <BtnText>일반배송(5-7일소요)</BtnText>
                </Btn>
              </BtnBox>
            </BtnArea>
          )}
        </BuyBox>
      </BuyWrapper>
    </BuyBackGround>
  );
};

export default SelectLayout;

const Title = styled.h2`
  position: fixed;
  font-size: 24px;
  font-weight: 700;
  top: 52px;
  left: 50%;
  transform: translateX(-50%);
  z-index: ${({ theme }) => theme.buySellTitle};
`;

const BuyBackGround = styled.div`
  background-color: #fafafa;
`;

const BuyWrapper = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  max-width: 780px;
  min-height: 800px;
  padding: 40px;
`;

const BuyBox = styled.div`
  box-shadow: 0 4px 10px 0 rgb(0 0 0 / 10%);
  padding: 32px;
  background-color: #fff;
`;

const ItemInfoBox = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const ItemInfo = styled.div`
  ${flexBox('', '', 'column')}
  padding-left: 16px;
`;

const ItemImg = styled.img`
  border-radius: 10px;
`;

const ItemCode = styled.span`
  line-height: 17px;
  font-size: 14px;
  font-weight: 700;
`;

const ItemEnglishName = styled.span`
  line-height: 17px;
  font-size: 14px;
  margin: 2px 0;
`;

const ItemKoreanName = styled.span`
  line-height: 16px;
  font-size: 13px;
  letter-spacing: -0.05px;
  color: rgba(34, 34, 34, 0.5);
`;

const ItemSelectBox = styled.div`
  padding: 20px 0;
  border-top: ${({ theme }) => theme.globalBorderStyle};
`;

const SelectList = styled.ul`
  width: 100%;

  & .active * {
    font-weight: 700;
  }
  & .active {
    border-color: #222;
  }
`;

const SelectItem = styled.li`
  margin: 4px;
  display: inline-block;
  width: calc(33.33333% - 8px);
  border: 1px solid #ebebeb;
  height: 60px;
  border-radius: 10px;
`;

const SizeBtn = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const Size = styled.span`
  display: block;
  line-height: 17px;
  font-size: 14px;
`;

const Price = styled.span<{ tradeType: string }>`
  display: block;
  color: ${({ tradeType }) => (tradeType === 'sell' ? '#41b979' : '#ef6253')};
  line-height: 14px;
  margin-top: 1px;
  font-size: 12px;
`;

const BtnArea = styled.div`
  padding-top: 20px;
  border-top: ${({ theme }) => theme.globalBorderStyle};
`;

const BtnBox = styled.div<{ tradeType: string }>`
  width: calc(100% - 6px);
  margin: 0 3px;
  display: inline-block;
  border: 1px solid #ebebeb;
  height: 60px;
  border-radius: 10px;
  background-color: ${({ tradeType }) =>
    tradeType === 'sell' ? '#41b979' : '#ef6253'};
`;

const Btn = styled(SizeBtn)``;

const BtnPrice = styled.span`
  display: block;
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 2px;
  color: #fff;
`;

const BtnText = styled.span`
  font-size: 12px;
  margin: 2px;
  color: rgba(255, 255, 255, 0.8);
`;
