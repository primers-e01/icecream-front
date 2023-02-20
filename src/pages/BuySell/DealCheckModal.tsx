import React from 'react';
import styled from 'styled-components';
import { positionCenter } from '../../styles/mixin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { API } from '../../config/config';

interface Props {
  setIsBidClicked: React.Dispatch<React.SetStateAction<boolean>>;
  price: string;
  formatPrice: string;
  tradeType: string;
  size: string | null;
  selectType: string;
  buyNow: string;
  sellNow: string;
}

interface ModalMap {
  [key: string]: any;
  sell: {
    sellBid: ModalMapType;
    sellNow: ModalMapType;
  };
  buy: {
    buyBid: ModalMapType;
    buyNow: ModalMapType;
  };
}

type ModalMapType = {
  text: string;
  api: string;
  btn: string;
};

const MODAL_MAP: ModalMap = {
  sell: {
    sellBid: {
      text: '판매 입찰',
      api: API.sellBid,
      btn: '판매입찰 완료',
    },

    sellNow: {
      text: '즉시 판매',
      api: API.sellNow,
      btn: '즉시판매 완료',
    },
  },
  buy: {
    buyBid: {
      text: '구매 입찰',
      api: API.buyBid,
      btn: '구매입찰 완료',
    },

    buyNow: {
      text: '즉시 구매',
      api: API.buyNow,
      btn: '즉시구매 완료',
    },
  },
};

const DealCheckModal = ({
  setIsBidClicked,
  price,
  formatPrice,
  tradeType,
  size,
  selectType,
  buyNow,
  sellNow,
}: Props) => {
  const onCloseClick = () => setIsBidClicked(false);

  const requestHeaders: Headers = new Headers();
  requestHeaders.set('Content-Type', 'application/json');
  requestHeaders.set('Authorization', localStorage.getItem('TOKEN') ?? '');

  const onBtnClick = () => {
    fetch(`${MODAL_MAP[tradeType][selectType].api}`, {
      method: 'POST',
      headers: requestHeaders,
      body: JSON.stringify({
        // TODO: 사이즈 선택창 완료 후 수정
        productId: 4,
        size: size,
        price: formatPrice,
      }),
    });
    alert('입찰완료');
  };

  return (
    <Wrapper>
      <IconBox>
        <FontAwesomeIcon icon={faX} size="lg" onClick={onCloseClick} />
      </IconBox>

      <TitleBox>
        <PriceText>
          {tradeType === 'sell' ? '총 정산금액' : '총 결제금액'}
        </PriceText>

        <Price tradeType={tradeType}>
          {tradeType === 'sell'
            ? selectType === 'sellBid'
              ? price + '원'
              : sellNow + '원'
            : selectType === 'buyBid'
            ? price + '원'
            : buyNow + '원'}
        </Price>
      </TitleBox>

      <NoticeBox>
        해당 거래는 개인간 거래로 단순변심 또는 실수에 따른{' '}
        <Highlight>체결 후 취소는 불가능합니다.</Highlight>
      </NoticeBox>

      <BtnBox>
        <Btn tradeType={tradeType} onClick={onBtnClick}>
          {MODAL_MAP[tradeType][selectType].btn}
        </Btn>
      </BtnBox>
    </Wrapper>
  );
};

export default DealCheckModal;

const Wrapper = styled.div`
  ${positionCenter('fixed')}
  width: 400px;
  text-align: center;
  z-index: ${({ theme }) => theme.alertModal};
  background-color: #fff;
  box-shadow: 0 0 0 100vw rgba(0, 0, 0, 0.2);
  border-radius: 16px;
`;

const IconBox = styled.div`
  position: absolute;
  top: 18px;
  right: 20px;
  cursor: pointer;
`;

const TitleBox = styled.div`
  margin: 32px 32px 0;
  padding-bottom: 20px;
  border-bottom: ${({ theme }) => theme.globalBorderStyle};
`;

const PriceText = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 600;
`;

const Price = styled.span<{ tradeType?: string }>`
  display: block;
  font-size: 24px;
  font-weight: 700;
  color: ${({ tradeType }) => (tradeType === 'sell' ? '#41b979' : '#ef6253')};
  margin-top: 3px;
  letter-spacing: -1px;
`;

const NoticeBox = styled.div`
  padding-top: 24px;
  font-size: 18px;
  margin: 0 50px;
  line-height: 22px;
`;

const Highlight = styled.strong`
  font-weight: 700;
  text-decoration: underline;
  text-decoration-color: rgba(239, 98, 83, 0.36078);
  text-decoration-thickness: 6px;
  text-underline-offset: -6px;
`;

const BtnBox = styled.div`
  padding: 24px 32px 32px;
`;

const Btn = styled.button<{ tradeType: string }>`
  background-color: ${({ tradeType }) =>
    tradeType === 'sell' ? '#41b979' : '#ef6253'};
  height: 52px;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  width: 100%;
  border: none;
  outline: none;
  border-radius: 14px;
  cursor: pointer;
`;
