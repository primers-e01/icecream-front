import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { positionCenter } from '../../styles/mixin';

const IMAGE_LIST = [
  { id: 1, img: 'http://placeimg.com/640/640/nature' },
  { id: 2, img: 'http://placeimg.com/640/640/tech' },
  { id: 3, img: 'http://placeimg.com/640/640/animal' },
  { id: 4, img: 'http://placeimg.com/640/640/nature' },
];

const AlertModal = ({ setIsClicked, productData }) => {
  const onCloseClick = () => setIsClicked(false);

  return (
    <AlertModalWrapper>
      <IconBox>
        <FontAwesomeIcon
          icon="fa-solid fa-x"
          size="lg"
          onClick={onCloseClick}
        />
      </IconBox>
      <AlertTitle>상품 특이 사항</AlertTitle>

      <AlertContent>
        <ItemArea>
          <ItemImg
            src="http://placeimg.com/640/640/people"
            alt="제품 이미지"
            width="80px"
          />
          <ItemInfo>
            <ItemCode>{productData?.modelNumber}</ItemCode>
            <ItemEnglishName>{productData?.enName}</ItemEnglishName>
            <ItemKoreanName>{productData?.krName}</ItemKoreanName>
          </ItemInfo>
        </ItemArea>
        <ItemDesc>
          <CommonNotice>
            아래 개체별 특성을 확인하시고 거래 부탁드립니다. 개체별 특성에 따른
            <HighlightText> 환불이나 교환은 불가능</HighlightText>
            하므로 주의 부탁드립니다.
          </CommonNotice>
          <BoldText>01.</BoldText>
          <CommonNotice>
            해당 모델 가죽 소재 특성상 발생되는 이염 및 얼룩 다수 발견
          </CommonNotice>
          {IMAGE_LIST.map(({ id, img }) => (
            <ImgBox key={id} src={img} />
          ))}
        </ItemDesc>
      </AlertContent>
    </AlertModalWrapper>
  );
};

export default AlertModal;

const AlertModalWrapper = styled.div`
  ${positionCenter('fixed')}
  width: 580px;
  background-color: #fff;

  z-index: ${({ theme }) => theme.alertModal};
  border-radius: 16px;
  box-shadow: 0 0 0 100vw rgba(0, 0, 0, 0.2);
`;

const AlertTitle = styled.h3`
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
`;

const AlertContent = styled.div`
  background-color: transparent;
  height: 528px;
  margin-bottom: 32px;
  padding: 20px 36px;
  overflow-y: auto;
`;

const ItemArea = styled.div`
  display: flex;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 2px solid #222;
`;

const ItemImg = styled.img`
  border-radius: 10px;
`;

const ItemInfo = styled.div`
  margin-left: 12px;
`;

const ItemCode = styled.div`
  font-size: 12px;
  line-height: 14px;
  margin-top: 3px;
`;

const ItemEnglishName = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin-top: 2px;
  line-height: 19px;
`;

const ItemKoreanName = styled.div`
  font-size: 12px;
  margin-top: 6px;
  color: #666;
  line-height: 14px;
`;

const ItemDesc = styled.div``;

const CommonNotice = styled.p`
  margin-bottom: 20px;
  font-size: 14px;
  line-height: 17px;
`;

const HighlightText = styled.strong`
  color: #f15746;
`;

const BoldText = styled.span`
  font-size: 14px;
  font-weight: 700;
`;
const ImgBox = styled.img`
  width: 100%;
  margin-bottom: 20px;
`;
