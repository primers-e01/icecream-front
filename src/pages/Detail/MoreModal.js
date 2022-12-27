import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { positionCenter } from '../../styles/mixin';

const MoreModal = ({ setIsMoreClicked }) => {
  const onCloseClick = () => setIsMoreClicked(false);

  return (
    <ModalWrapper>
      <IconBox>
        <FontAwesomeIcon
          icon="fa-solid fa-x"
          size="lg"
          onClick={onCloseClick}
        />
      </IconBox>
      <ModalTitle>시세</ModalTitle>
      <ModalContent>
        <ItemBox>
          <ItemImg
            src="http://placeimg.com/640/640/people"
            alt="제품 이미지"
            width="80px"
          />
          <ItemInfo>
            <ItemEnglishName>
              Jordan 1 Retro High OG Chicago 2022
            </ItemEnglishName>
            <ItemKoreanName>조던 1 레트로 하이 OG 시카고 2022</ItemKoreanName>
            <SizeBtn>
              <BtnText>모든 사이즈</BtnText>
              <BtnIcon>
                <FontAwesomeIcon
                  className="icon"
                  icon="fa-solid fa-caret-down"
                />
              </BtnIcon>
            </SizeBtn>
          </ItemInfo>
        </ItemBox>
        <ListBox>
          <BtnList>
            {BTN_LIST.map(({ id, list }) => {
              return <BtnItem key={id}>{list}</BtnItem>;
            })}
          </BtnList>
        </ListBox>
      </ModalContent>
    </ModalWrapper>
  );
};

export default MoreModal;

const ModalWrapper = styled.div`
  ${positionCenter('fixed')}
  width: 480px;
  background-color: #fff;

  z-index: ${({ theme }) => theme.alertModal};
  border-radius: 16px;
  box-shadow: 0 0 0 100vw rgba(0, 0, 0, 0.2);
`;

const ModalTitle = styled.h3`
  min-height: 60px;
  padding: 18px 50px 20px;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  color: #000;
`;

const IconBox = styled.div`
  position: absolute;
  top: 18px;
  right: 20px;
  cursor: pointer;

  .svg-inline--fa {
    vertical-align: -2.5px;
  }
`;

const ModalContent = styled.div`
  background-color: transparent;
  height: 465px;
  padding: 0 32px 32px;
  overflow-y: auto;
`;

const ItemBox = styled.div`
  display: flex;
  margin-bottom: 9px;
`;

const ItemImg = styled.img`
  border-radius: 10px;
`;

const ItemInfo = styled.div`
  margin-left: 12px;
`;

const ItemEnglishName = styled.div`
  font-size: 15px;
  line-height: 19px;
`;

const ItemKoreanName = styled.div`
  font-size: 11px;
  margin-top: 6px;
  color: ${({ theme }) => theme.mainBrandGray05};
  line-height: 14px;
`;

const SizeBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5px 0 12px;
  margin-top: 5px;
  height: 40px;
  border-radius: 12px;
  border: 1px solid #ebebeb;
  text-align: center;
  background-color: #fff;
  cursor: pointer;
`;

const BtnText = styled.p`
  font-weight: 700;
  line-height: 24px;
  font-size: 16px;
  color: ${({ theme }) => theme.mainBrandGray08};
`;

const BtnIcon = styled.div`
  margin-left: 12px;
  width: 19px;
  height: 19px;
  border: 1px solid #ebebeb;
  border-radius: 50%;
`;

const ListBox = styled.div``;

const BtnList = styled.ul`
  display: flex;
  background-color: #f4f4f4;
  /* margin: 0 32px 12px; */
  border-radius: 8px;
`;

const BtnItem = styled.li`
  flex: 1;
  margin: 2px;
  font-size: 12px;
  padding: 6px 0;
  text-align: center;
  line-height: 16px;
`;

const BTN_LIST = [
  { id: 1, list: '체결 거래 ' },
  { id: 2, list: '판매 입찰' },
  { id: 3, list: '구매 입찰' },
];
