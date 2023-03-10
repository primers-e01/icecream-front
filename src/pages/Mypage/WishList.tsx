import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BuyButton from '../Detail/components/BuyButton';
import { useAppSelector } from '../Detail/store/Store';
import axios from 'axios';

interface ItemType {
  img: string;
  title: string;
  subtitle: string;
  size: number;
  price: number;
}
type ItemListType = ItemType[];

const WishList = () => {
  const [item, setItem] = useState<ItemListType>([
    {
      img: '/images/naverIcon.png',
      title: '하이',
      subtitle: '하이2dsaffsafds',
      size: 204,
      price: 2000000,
    },
  ]);
  const product = useAppSelector(state => state.ProductSlice);
  console.log(product.productData);
  const deleteItem = (i: number) => {
    setItem(item.filter((_, index) => index !== i));
  };

  const deleteWish = async () => {
    try {
      await axios.delete('', {
        headers: { Authorization: localStorage.accessToken },
      });
    } catch (error) {
      console.log(error);
    }
  };

  if (item.length === 0)
    return (
      <WishListContainer>
        <Title>찜 목록</Title>
        <NoItem>찜한 상품이 없습니다.</NoItem>
      </WishListContainer>
    );

  return (
    <WishListContainer>
      <Title>찜 목록</Title>
      <WishItemList>
        {item.map((item, idx) => {
          const { img, title, subtitle, size } = item;
          return (
            <WishItem key={idx}>
              <ItemFlex>
                <ItemImg alt="img" src={img} />
                <TitleFlex>
                  <ItemTitle>{title}</ItemTitle>
                  <ItemSubTitle>{subtitle}</ItemSubTitle>
                  <ItemSize>{size}</ItemSize>
                </TitleFlex>
              </ItemFlex>
              <BtnWrapper>
                <BuyButton
                  size={16}
                  width="200px"
                  productData={product.productData}
                />
              </BtnWrapper>
              <WishItemDelete
                onClick={() => {
                  deleteItem(idx);
                }}
              >
                삭제
              </WishItemDelete>
            </WishItem>
          );
        })}
      </WishItemList>
    </WishListContainer>
  );
};

export default WishList;

const WishListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 70px;
  overflow: hidden;
  min-height: 380px;
  width: 100%;
`;

const Title = styled.div`
  height: 50px;
  line-height: 29px;
  font-size: 24px;
  letter-spacing: -0.36px;
  padding-bottom: 16px;
  width: 100%;
  border-bottom: 3px solid #222;
`;

const WishItemList = styled.ul`
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const WishItem = styled.li`
  display: flex;
  position: relative;
  list-style-type: none;
  padding: 20px 0 19px;
  align-items: center;
  border-bottom: 1px solid #ebebeb;
  justify-content: space-between;
`;

const ItemImg = styled.img`
  flex: none;
  width: 80px;
  height: 80px;
  border-radius: 8px;
`;
const ItemFlex = styled.div`
  text-align: left;
  display: flex;
  /* flex-direction: column; */
  padding-left: 20px;
`;

const ItemTitle = styled.div`
  overflow: hidden;
  display: inline-block;
  vertical-align: top;
  height: 17px;
  line-height: 17px;
  padding-bottom: 2px;
  font-size: 14px;
  font-weight: 700;
  color: #333;
  white-space: nowrap;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  border-bottom: 1px solid #222;
  width: fit-content;
  max-width: 100%;
`;

const ItemSubTitle = styled.div`
  /* margin-top: 2px;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical; */
  max-height: 36px;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: -0.03px;
`;

const ItemSize = styled.div`
  margin-top: auto;
  font-size: 13px;
  font-weight: 700;
  line-height: 16px;
`;
const BtnWrapper = styled.div`
  display: flex;
  height: 60px;
`;

const WishItemDelete = styled.div`
  margin-top: 6px;
  padding: 0 3px;
  position: absolute;
  bottom: 0;
  right: 0;
  /* display: inline-flex;
  position: relative;
  top: 60px;
  right: 40px; */
  font-size: 12px;
  letter-spacing: -0.06px;
  color: rgba(34, 34, 34, 0.8);
  text-decoration: underline;
  cursor: pointer;
`;

const NoItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 150px;
`;

const TitleFlex = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`;
