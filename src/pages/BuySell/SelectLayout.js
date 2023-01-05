import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { flexBox } from '../../styles/mixin';

const SIZE_BTN = [
  { size: 230, price: '100,000' },
  { size: 240, price: '200,000' },
  { size: 250, price: '300,000' },
  { size: 260, price: '400,000' },
  { size: 270, price: '500,000' },
  { size: 280, price: '600,000' },
];

const SelectLayout = ({ type }) => {
  const [selectSize, setSelectSize] = useState();
  const [selectedPrice, setSelectedPrice] = useState();

  const navigate = useNavigate();

  const onSizeClick = (size, price) => {
    setSelectSize(size);
    setSelectedPrice(price);
  };

  return (
    <BuyBackGround>
      <Title>{type === 'sell' ? '판매하기' : '구매하기'}</Title>
      <BuyWrapper>
        <BuyBox>
          <ItemInfoBox>
            <ItemImg
              // TODO: 백 데이터로 수정
              src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1608667508764-33cf0726b13a%3Fixlib%3Drb-4.0.3%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D880%26q%3D80"
              alt="제품 이미지"
              width="80px"
            />
            <ItemInfo>
              {/* TODO: 백 데이터로 수정 */}
              <ItemCode>AA001</ItemCode>
              <ItemEnglishName>Etiam ac tortor iaculis</ItemEnglishName>
              <ItemKoreanName>에티암 에크 토터</ItemKoreanName>
            </ItemInfo>
          </ItemInfoBox>

          <ItemSelectBox>
            <SelectList>
              {SIZE_BTN.map(({ size, price }) => {
                return (
                  <SelectItem
                    onClick={() => onSizeClick(size, price)}
                    className={size === selectSize && 'active'}
                    key={size}
                  >
                    <SizeBtn>
                      <Size>{size}</Size>
                      <Price type={type}>{price}</Price>
                    </SizeBtn>
                  </SelectItem>
                );
              })}
            </SelectList>
          </ItemSelectBox>

          {selectSize && (
            <BtnArea>
              <BtnBox
                onClick={() => navigate(`/${type}?size=${selectSize}`)}
                type={type}
              >
                <Btn>
                  <BtnPrice>{selectedPrice}</BtnPrice>
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
  border-top: ${({ theme }) => theme.globalBoardStyle};
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

const Price = styled.span`
  display: block;
  color: ${({ type }) => (type === 'sell' ? '#41b979' : '#ef6253')};
  line-height: 14px;
  margin-top: 1px;
  font-size: 12px;
`;

const BtnArea = styled.div`
  padding-top: 20px;
  border-top: ${({ theme }) => theme.globalBoardStyle};
`;

const BtnBox = styled.div`
  width: calc(100% - 6px);
  margin: 0 3px;
  display: inline-block;
  border: 1px solid #ebebeb;
  height: 60px;
  border-radius: 10px;
  background-color: ${({ type }) => (type === 'sell' ? '#41b979' : '#ef6253')};
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
