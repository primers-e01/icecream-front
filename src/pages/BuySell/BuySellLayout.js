import { React, useState, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { API } from '../../config/config';
import useOutSideClick from '../../hooks/useOutSideClick';
import { flexBox } from '../../styles/mixin';
import DealBidModal from './DealBidModal';

const BTN_BUY_ITEM = [{ item: '구매 입찰' }, { item: '즉시 구매' }];
const BTN_SELL_ITEM = [{ item: '판매 입찰' }, { item: '즉시 판매' }];

const BuySellLayout = ({ type, item }) => {
  const [selectType, setSelectType] = useState(item);
  const [inputValue, setInputValue] = useState('');
  const [checkInputValue, setCheckInputValue] = useState(true);
  const [isBidClicked, setIsBidClicked] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const ref = useRef();

  const getQuerySize = searchParams.get('size');

  const onDealBtnClick = () => setIsBidClicked(true);

  const onClickTab = item => setSelectType(item);

  const comma = value =>
    String(value).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');

  const uncomma = value => String(value).replace(/[^\d]+/g, '');

  const onInputChange = ({ target }) => {
    const value = target.value;
    const checkInputValueOver30000 = Number(uncomma(value)) >= 30000;
    setCheckInputValue(checkInputValueOver30000);
    setInputValue(comma(uncomma(value)));
  };

  useOutSideClick(ref, () => setIsBidClicked(false));

  return (
    <BuyBackGround>
      <div ref={ref}>
        {isBidClicked && (
          <DealBidModal
            setIsBidClicked={setIsBidClicked}
            price={comma(uncomma(inputValue))}
            formatPrice={uncomma(inputValue)}
            type={type}
            size={getQuerySize}
            selectType={selectType}
          />
        )}
      </div>

      <Title>
        {type === 'sell'
          ? selectType === '판매 입찰'
            ? '판매 입찰하기'
            : '즉시 판매하기'
          : selectType === '구매 입찰'
          ? '구매 입찰하기'
          : '즉시 구매하기'}
      </Title>

      <BuyWrapper>
        <BuyBox>
          <ItemInfoBox>
            <ItemImg
              src="http://placeimg.com/640/640/people"
              alt="제품 이미지"
              width="80px"
            />
            <ItemInfo>
              <ItemCode>DZ5485-612</ItemCode>
              <ItemEnglishName>
                Jordan 1 Retro High OG Chicago 2022
              </ItemEnglishName>
              <ItemKoreanName>조던 1 레트로 하이 OG 시카고 2022</ItemKoreanName>
              <ItemSize>{getQuerySize}</ItemSize>
            </ItemInfo>
          </ItemInfoBox>

          <PriceBox>
            <BuyNowPrice>
              <Text>즉시 구매가</Text>
              <Price>123,000원</Price>
            </BuyNowPrice>
            <SellNowPrice>
              <Text>즉시 판매가</Text>
              <Price>123,000원</Price>
            </SellNowPrice>
          </PriceBox>

          <BtnSection>
            <BtnList type={type}>
              {(type === 'sell' ? BTN_SELL_ITEM : BTN_BUY_ITEM).map(
                ({ item }) => (
                  <BtnItem
                    key={item}
                    className={selectType === item && 'active'}
                    onClick={() => onClickTab(item)}
                  >
                    {item}
                  </BtnItem>
                )
              )}
            </BtnList>
          </BtnSection>

          {selectType === '구매 입찰' || selectType === '판매 입찰' ? (
            <DealNowSection checkInputValue={checkInputValue}>
              <PriceTitle checkInputValue={checkInputValue}>
                {type === 'sell' ? '판매 희망가' : '구매 희망가'}
              </PriceTitle>
              <PriceInputBox>
                {!checkInputValue && (
                  <PriceWarning>3만원 부터 천원단위로 입력하세요.</PriceWarning>
                )}
                <PriceInput
                  type="text"
                  placeholder="희망가 입력"
                  onChange={onInputChange}
                  value={inputValue}
                  required="required"
                  maxLength="11"
                  pattern="([0-9]+.{0,1}[0-9]*,{0,1})*[0-9]"
                />
                <PriceInputText>원</PriceInputText>
              </PriceInputBox>
            </DealNowSection>
          ) : (
            ''
          )}

          {selectType === '즉시 구매' || selectType === '즉시 판매' ? (
            <DealNowSection>
              <PriceTitle checkInputValue={true}>
                {type === 'sell' ? '즉시 판매가' : '즉시 구매가'}
              </PriceTitle>
              <PriceText>223,000원</PriceText>
            </DealNowSection>
          ) : (
            ''
          )}

          <PriceBind>총 결제금액은 다음 화면에서 계산됩니다.</PriceBind>

          <BtnArea>
            <BtnBox type={type}>
              {selectType === '즉시 구매' || selectType === '즉시 판매' ? (
                <Btn onClick={onDealBtnClick}>
                  <BtnText>
                    {type === 'sell' ? '즉시 판매 계속' : '즉시 구매 계속'}
                  </BtnText>
                </Btn>
              ) : (
                <Btn
                  disabled={Number(uncomma(inputValue)) >= 30000 ? false : true}
                  onClick={onDealBtnClick}
                >
                  <BtnText>
                    {type === 'sell' ? '판매 입찰 계속' : '구매 입찰 계속'}
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
  border-top: ${({ theme }) => theme.globalBoardStyle};
`;

const BuyNowPrice = styled.div`
  flex: 1;
  text-align: center;
  border-right: ${({ theme }) => theme.globalBoardStyle};
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

const BtnList = styled.ul`
  display: flex;
  background-color: #f4f4f4;
  border-radius: 80px;
  border: 1px solid #ebebeb;

  & .active {
    color: white;
    background-color: ${({ type }) =>
      type === 'sell' ? '#41b979' : '#ef6253'};
  }
`;

const BtnItem = styled.li`
  flex: 1;
  text-align: center;
  font-size: 14px;
  color: ${({ theme }) => theme.mainBrandGray05};
  background-color: 'tranparent';
  padding: 14px 0;
  margin: 3px;
  border-radius: 80px;
  cursor: pointer;
`;

const DealNowSection = styled.section`
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

const PriceTitle = styled.div`
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
  border-top: ${({ theme }) => theme.globalBoardStyle};
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
