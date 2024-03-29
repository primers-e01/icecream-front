import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { comma } from 'src/utils/comma';
import { uncomma } from 'src/utils/uncomma';
import styled from 'styled-components';
import useOutSideClick from '../../hooks/useOutSideClick';
import { flexBox } from '../../styles/mixin';
import { useAppSelector } from '../Detail/store/Store';
import DealBidModal from './DealCheckModal';

// TODO: 추후 구매입찰, 즉시판매 기능 구현해보기
const BTN_BUY_ITEM = [
  // { item: 'buyBid', text: '구매 입찰하기(삭제 예정)' },
  { item: 'buyNow', text: '즉시 구매하기' },
];
const BTN_SELL_ITEM = [
  { item: 'sellBid', text: '판매 입찰하기' },
  // { item: 'sellNow', text: '즉시 판매하기(삭제 예정)' },
];

interface GroupedSellBidData {
  [size: string]: number;
}

interface Props {
  tradeType: string;
  item: string;
}

const BuySellLayout = ({ tradeType, item }: Props) => {
  const [selectType, setSelectType] = useState(item);
  const [inputValue, setInputValue] = useState('');
  const [checkInputValue, setCheckInputValue] = useState(true);
  const [isBidClicked, setIsBidClicked] = useState(false);
  const [searchParams] = useSearchParams();

  const ProductSlice = useAppSelector(state => state.ProductSlice);

  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);

  const getQuerySize = searchParams.get('size');

  // TODO: 중복로직제거
  const sellBidDataAll = ProductSlice.tradeAll[0]?.sellBidDataAll;

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
  const onDealBtnClick = () => setIsBidClicked(true);

  const onClickTab = (item: string) => {
    if (selectType === 'sellBid' || selectType === 'buyNow') return;
    setSelectType(item);
  };

  const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const value = target.value;
    const checkInputValueOver30000 = Number(uncomma(value)) >= 30000;
    setCheckInputValue(checkInputValueOver30000);
    setInputValue(comma(uncomma(value)));
  };

  const onBlur = () => {
    const sellNow = ProductSlice.productData?.sellNow;
    const inputValueNum = Number(uncomma(inputValue));

    if (sellNow && inputValueNum < Math.floor(Number(sellNow))) {
      setInputValue(Math.floor(Number(sellNow)).toLocaleString());
    }
  };

  useOutSideClick(ref, () => setIsBidClicked(false));

  useEffect(() => {
    if (!ProductSlice.productData) {
      navigate('/shop');
    }
  }, []);

  return (
    <BuyBackGround>
      <div ref={ref}>
        {isBidClicked && (
          <DealBidModal
            setIsBidClicked={setIsBidClicked}
            price={comma(uncomma(inputValue))}
            formatPrice={uncomma(inputValue)}
            tradeType={tradeType}
            size={getQuerySize}
            selectType={selectType}
            buyNow={
              getQuerySize &&
              Math.floor(
                Number(groupedSellBidData?.[getQuerySize])
              ).toLocaleString()
            }
            sellNow={Math.floor(
              Number(ProductSlice.productData?.sellNow)
            ).toLocaleString()}
          />
        )}
      </div>

      <Title>
        {tradeType === 'sell'
          ? selectType === 'sellBid'
            ? '판매 입찰하기'
            : '즉시 판매하기'
          : selectType === 'buyBid'
          ? '구매 입찰하기'
          : '즉시 구매하기'}
      </Title>

      <BuyWrapper>
        <BuyBox>
          <ItemInfoBox>
            <ItemImg
              src={ProductSlice.productData?.thumbnailImageUrl}
              alt="제품 이미지"
              width="80px"
            />
            <ItemInfo>
              <ItemCode>{ProductSlice.productData?.modelNumber}</ItemCode>
              <ItemEnglishName>
                {ProductSlice.productData?.enName}
              </ItemEnglishName>
              <ItemKoreanName>
                {ProductSlice.productData?.krName}
              </ItemKoreanName>
              <ItemSize>{getQuerySize}</ItemSize>
            </ItemInfo>
          </ItemInfoBox>

          <PriceBox>
            <BuyNowPrice>
              <Text>즉시 구매가</Text>
              <Price>
                {getQuerySize && groupedSellBidData?.[getQuerySize]
                  ? Math.floor(
                      Number(groupedSellBidData?.[getQuerySize])
                    ).toLocaleString()
                  : '-'}
                원
              </Price>
            </BuyNowPrice>
            {/* TODO: 추후 구매입찰, 즉시판매 기능 구현해보기  */}
            <SellNowPrice>
              <Text>즉시 판매가 (삭제 예정)</Text>
              <Price>
                {Math.floor(
                  Number(ProductSlice.productData?.sellNow)
                ).toLocaleString()}
                원
              </Price>
            </SellNowPrice>
          </PriceBox>

          <BtnSection>
            <BtnList tradeType={tradeType}>
              {(tradeType === 'sell' ? BTN_SELL_ITEM : BTN_BUY_ITEM).map(
                ({ item, text }) => (
                  <TabBtn
                    key={item}
                    className={selectType === item ? 'active' : ''}
                    onClick={() => onClickTab(item)}
                  >
                    {text}
                  </TabBtn>
                )
              )}
            </BtnList>
          </BtnSection>

          {selectType === 'buyBid' || selectType === 'sellBid' ? (
            <DealNowSection checkInputValue={checkInputValue}>
              <PriceTitle checkInputValue={checkInputValue}>
                {tradeType === 'sell' ? '판매 희망가' : '구매 희망가'}
              </PriceTitle>
              <PriceInputBox>
                {!checkInputValue && (
                  <PriceWarning>3만원 이상 입력하세요.</PriceWarning>
                )}
                <PriceInput
                  type="text"
                  placeholder="희망가 입력"
                  onChange={onInputChange}
                  onBlur={onBlur}
                  value={inputValue}
                  required
                  maxLength={11}
                  pattern="([0-9]+.{0,1}[0-9]*,{0,1})*[0-9]"
                />
                <PriceInputText>원</PriceInputText>
              </PriceInputBox>
            </DealNowSection>
          ) : (
            ''
          )}

          {selectType === 'buyNow' || selectType === 'sellNow' ? (
            // TODO: checkInputValue 들어가는지 체크
            <DealNowSection checkInputValue={checkInputValue}>
              <PriceTitle checkInputValue={true}>
                {tradeType === 'sell' ? '즉시 판매가' : '즉시 구매가'}
              </PriceTitle>
              <PriceText>
                {tradeType === 'sell'
                  ? `${Math.floor(
                      Number(ProductSlice.productData?.sellNow)
                    ).toLocaleString()}원`
                  : getQuerySize && groupedSellBidData?.[getQuerySize]
                  ? `${Math.floor(
                      Number(groupedSellBidData?.[getQuerySize])
                    ).toLocaleString()}원`
                  : '-'}
              </PriceText>
            </DealNowSection>
          ) : (
            ''
          )}

          <PriceBind>총 결제금액은 다음 화면에서 계산됩니다.</PriceBind>

          <BtnArea>
            {/* TODO: tradeType 들어가는지 체크 */}
            <BtnBox>
              {selectType === 'buyNow' || selectType === 'sellNow' ? (
                <Btn
                  onClick={onDealBtnClick}
                  disabled={
                    getQuerySize && groupedSellBidData?.[getQuerySize]
                      ? false
                      : true
                  }
                >
                  <BtnText>
                    {tradeType === 'sell' ? '즉시 판매 계속' : '즉시 구매 계속'}
                  </BtnText>
                </Btn>
              ) : (
                <Btn
                  disabled={Number(uncomma(inputValue)) >= 30000 ? false : true}
                  onClick={onDealBtnClick}
                >
                  <BtnText>
                    {tradeType === 'sell' ? '판매 입찰 계속' : '구매 입찰 계속'}
                  </BtnText>
                </Btn>
              )}
            </BtnBox>
          </BtnArea>
        </BuyBox>
      </BuyWrapper>
    </BuyBackGround>
  );
};

export default BuySellLayout;

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

const ItemSize = styled.span`
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  margin-top: 7px;
`;

const PriceBox = styled.div`
  ${flexBox()}
  padding: 28px 0;
  border-top: ${({ theme }) => theme.globalBorderStyle};
`;

const BuyNowPrice = styled.div`
  flex: 1;
  text-align: center;
  border-right: ${({ theme }) => theme.globalBorderStyle};
`;

const SellNowPrice = styled.div`
  flex: 1;
  text-align: center;
`;

const Text = styled.span`
  display: block;
  line-height: 14px;
  font-size: 12px;
  letter-spacing: -0.06px;
  color: rgba(34, 34, 34, 0.5);
`;

const Price = styled.span`
  display: inline-block;
  line-height: 24px;
  vertical-align: top;
  font-size: 16px;
`;

const BtnSection = styled.section`
  margin-bottom: 27px;
`;

const BtnList = styled.ul<{ tradeType: string }>`
  display: flex;
  background-color: #f4f4f4;
  border-radius: 80px;
  border: 1px solid #ebebeb;

  & .active {
    color: #fff;
    background-color: ${({ tradeType }) =>
      tradeType === 'sell' ? '#41b979' : '#ef6253'};
  }
`;

const TabBtn = styled.button`
  flex: 1;
  text-align: center;
  font-size: 14px;
  color: ${({ theme }) => theme.mainBrandGray05};
  background: none;
  padding: 14px 0;
  margin: 3px;
  border-radius: 80px;
  border: none;
  cursor: pointer;
`;

const DealNowSection = styled.section<{ checkInputValue: boolean }>`
  ${flexBox('space-between', '', '')}
  position: relative;
  border-bottom: 2px solid #ebebeb;
  padding-bottom: 10px;

  &:focus-within {
    border-bottom-color: ${({ checkInputValue }) =>
      !checkInputValue ? '#f15746' : '#000'};
  }
`;

const PriceBind = styled.div`
  padding: 20px 0 32px;
  font-size: 14px;
  color: ${({ theme }) => theme.mainBrandGray05};
`;

const PriceTitle = styled.div<{ checkInputValue: boolean }>`
  font-size: 14px;
  letter-spacing: -0.21px;
  font-weight: 700;
  min-width: 63px;
  color: ${({ checkInputValue }) => (!checkInputValue ? '#f15746' : '#000')};
`;

const PriceInputBox = styled.div`
  margin-top: 15px;
`;

const PriceInput = styled.input`
  font-size: 20px;
  line-height: 26px;
  font-weight: 600;
  text-align: right;
  max-width: 200px;
  border: none;

  &::placeholder {
    color: #bfbfbf;
  }

  &:focus {
    outline: none;
  }

  &:focus::placeholder {
    color: transparent;
  }
`;

const PriceWarning = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 13px;
  color: #f15746;
`;

const PriceInputText = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

const PriceText = styled.div`
  margin: 19px 0 4px;
  font-size: 20px;
  font-weight: 600;
`;

const BtnArea = styled.div`
  padding-top: 20px;
  border-top: ${({ theme }) => theme.globalBorderStyle};
`;

const BtnBox = styled.div`
  width: calc(100% - 6px);
  margin: 0 3px;
  display: inline-block;
  height: 52px;
  border-radius: 10px;
  background-color: #222;
`;

const Btn = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 8px;
  background-color: ${({ disabled }) => (disabled ? '#ebebeb' : '#000')};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
`;

const BtnText = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
`;
