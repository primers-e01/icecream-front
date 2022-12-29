import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Carousel from './Carousel';
import AlertModal from './AlertModal';
import FloatingPrice from './FloatingPrice';
import ChartSection from './ChartSection';
import Dropdown from './Dropdown';
import BuyButton from './components/BuyButton';
import SellButton from './components/SellButton';
import useOutSideClick from '../../hooks/useOutSideClick';
import { API } from '../../config/config';
import { flexBox } from '../../styles/mixin';

const GUIDE_LIST = [
  {
    id: 1,
    icon: 'fa-solid fa-certificate',
    title: '100% 정품 보증',
    description:
      'ICECREAM에서 검수한 상품이 정품이 아닐 경우, 구매가의 3배를 보상합니다.',
  },
  {
    id: 2,
    icon: 'fa-regular fa-circle-check',
    title: '엄격한 다중 검수',
    description:
      '모든 상품은 검수센터에 도착한 후, 상품별 전문가 그룹의 체계적인 시스템을 거쳐 검수를 진행합니다.',
  },
  {
    id: 3,
    icon: 'fa-solid fa-gift',
    title: '정품 인증 패키지',
    description:
      '검수에 합격한 경우에 한하여 ICECREAM의 정품 인증 패키지가 포함된 상품이 배송됩니다.',
  },
];

const Detail = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isFloat, setIsFloat] = useState(false);
  const [pageData, setPageData] = useState({});
  const productData = pageData.data?.productData[0];
  const tableData = pageData?.data?.tradeLimit[0];

  const ref = useRef();
  const dealBtnRef = useRef(null);

  const onAlertClick = () => setIsClicked(true);

  useOutSideClick(ref, () => setIsClicked(false));

  useEffect(() => {
    fetch(`${API.products}/3`)
      .then(response => response.json())
      .then(setPageData);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(([{ isIntersecting }]) =>
      setIsFloat(!isIntersecting)
    );

    if (dealBtnRef.current) observer.observe(dealBtnRef.current);

    return () => observer.disconnect();
  }, [dealBtnRef, productData]);

  if (!productData) return;

  return (
    <DetailWrapper>
      <div ref={ref}>
        {isClicked && (
          <AlertModal productData={productData} setIsClicked={setIsClicked} />
        )}
      </div>
      {isFloat && <FloatingPrice />}

      <ImageColumn>
        <ItemImgBox>
          <Carousel />

          <ItemAlertBox onClick={onAlertClick}>
            <AlertTitleBox>
              <AlertMark>주의</AlertMark>
              <AlertTitle>상품 특이사항 안내</AlertTitle>
            </AlertTitleBox>
            <AlertLightText>
              해당 상품의 개체별 특이사항 안내해드립니다.
            </AlertLightText>
            <AlertIcon>
              <FontAwesomeIcon icon="fa-solid fa-arrow-right" size="lg" />
            </AlertIcon>
          </ItemAlertBox>
        </ItemImgBox>
      </ImageColumn>

      <DescriptionColumn>
        <TitleSection>
          <BrandTitle>{productData?.brandName}</BrandTitle>
          <ItemEnglishName>{productData?.enName}</ItemEnglishName>
          <ItemKoreanName>{productData?.krName}</ItemKoreanName>
          <ItemFigureBox>
            <ItemSizeBox>
              <SizePriceText>사이즈</SizePriceText>
              <SizeBtnBox>
                <SizeBtnText>모든 사이즈</SizeBtnText>
                <FontAwesomeIcon
                  icon="fa-regular fa-square-caret-down"
                  size="lg"
                />
              </SizeBtnBox>
            </ItemSizeBox>
            <ItemPriceBox>
              <SizePriceText>최근 거래가</SizePriceText>
              <RecentPriceBox>
                <RecentPrice>
                  {Math.floor(productData?.recentTradePrice).toLocaleString()}원
                </RecentPrice>
                <RecentPricePercent>16,000원 (-3.6%)</RecentPricePercent>
              </RecentPriceBox>
            </ItemPriceBox>
          </ItemFigureBox>

          <DealBtnBox ref={dealBtnRef}>
            <BuyButton size={18} />
            <SellButton size={18} />
          </DealBtnBox>
        </TitleSection>

        <InfoSection>
          <InfoTitle>상품 정보</InfoTitle>
          <InfoBox>
            <DetailInfoBox>
              <ModelTitle>모델번호</ModelTitle>
              <ModelInfo>{productData?.modelNumber}</ModelInfo>
            </DetailInfoBox>

            <DetailInfoBox>
              <ModelTitle>출시일</ModelTitle>
              <ModelInfo>{productData?.releaseDate}</ModelInfo>
            </DetailInfoBox>

            <DetailInfoBox>
              <ModelTitle>컬러</ModelTitle>
              <ModelInfo>{productData?.color}</ModelInfo>
            </DetailInfoBox>

            <DetailInfoBox>
              <ModelTitle>발매가</ModelTitle>
              <ModelInfo>
                {Math.floor(productData?.originalPrice).toLocaleString()}원
              </ModelInfo>
            </DetailInfoBox>
          </InfoBox>
        </InfoSection>

        <DeliverySection>
          <DeliveryTitle>배송정보</DeliveryTitle>
          <DeliveryBox>
            <FontAwesomeIcon icon="fa-solid fa-truck" size="2x" />
            <DeliveryTextBox>
              <DeliveryBoldText>일반 배송 </DeliveryBoldText>
              <span>3000원</span>
              <DeliveryText>검수 후 배송 ・ 5-7일 내 도착 예정</DeliveryText>
            </DeliveryTextBox>
          </DeliveryBox>
        </DeliverySection>

        <ChartSection
          chartData={pageData.data?.chartData}
          tableData={tableData}
        />

        <Dropdown />

        <GuideSection>
          <ul>
            {GUIDE_LIST.map(({ id, icon, title, description }) => {
              return (
                <GuideItem key={id}>
                  <FontAwesomeIcon icon={icon} size="2x" />
                  <GuideText>
                    <GuideTitle>{title}</GuideTitle>
                    <GuideDescription>{description}</GuideDescription>
                  </GuideText>
                </GuideItem>
              );
            })}
          </ul>
        </GuideSection>

        <NoticeSection>
          아이스크림(주)는 통신판매 중개자로서 통신판매의 당사자가 아닙니다. 본
          상품은 개별판매자가 등록한 상품으로 상품, 상품정보, 거래에 관한 의무와
          책임은 각 판매자에게 있습니다. 단, 거래과정에서 검수하고 보증하는
          내용에 대한 책임은 아이스크림(주)에 있습니다.
        </NoticeSection>
      </DescriptionColumn>
    </DetailWrapper>
  );
};

export default Detail;

const DetailWrapper = styled.div`
  display: flex;
  margin: 100px auto 0;
  padding: 30px 40px 120px;
  max-width: 1280px;
`;

const ImageColumn = styled.div`
  width: 50%;
  padding-right: 3%;
`;

const ItemImgBox = styled.div`
  position: sticky;
  top: 130px;
`;

const ItemAlertBox = styled.div`
  ${flexBox('', '', 'column')}
  position: relative;
  margin-top: 20px;
  padding: 11px;
  border: ${({ theme }) => theme.globalBoardStyle};
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.globalBoxShadow};
  background-color: #fafafa;
  cursor: pointer;
`;

const AlertTitleBox = styled.div``;

const AlertMark = styled.span`
  background-color: #ff8824;
  font-size: 12px;
  padding: 3px 5px 2px;
  margin-right: 4px;
  font-weight: 600;
  border-radius: 3px;
  color: #fff;
`;

const AlertTitle = styled.span`
  font-size: 13px;
  font-weight: 600;
  line-height: 15px;
  letter-spacing: -0.1px;
`;

const AlertLightText = styled.span`
  margin-top: 4px;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.1px;
  color: ${({ theme }) => theme.mainBrandGray05};
`;

const AlertIcon = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const DescriptionColumn = styled.div`
  width: 50%;
  padding-left: 3%;
  position: relative;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    border-left: 1px solid #ebebeb;
  }
`;

const TitleSection = styled.section``;

const BrandTitle = styled.h3`
  display: inline-block;
  line-height: 19px;
  font-size: 18px;
  font-weight: 800;
  margin-bottom: 9px;
  border-bottom: 2px solid ${({ theme }) => theme.mainBrandBlack};
`;

const ItemEnglishName = styled.p`
  font-size: 18px;
  margin-bottom: 4px;
`;

const ItemKoreanName = styled.p`
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.mainBrandGray05};
`;

const ItemFigureBox = styled.div``;

const ItemSizeBox = styled.div`
  ${flexBox('space-between', 'center', 'null')}
  padding-top: 19px;
  padding-bottom: 12px;
  border-bottom: ${({ theme }) => theme.globalBoardStyle};
`;

const SizePriceText = styled.span`
  font-size: 13px;
  padding-top: 4px;
  color: ${({ theme }) => theme.mainBrandGray05};
`;

const SizeBtnBox = styled.div`
  cursor: pointer;
`;

const SizeBtnText = styled.span`
  margin-right: 6px;
  line-height: 24px;
  font-weight: 700;
`;

const ItemPriceBox = styled.div`
  ${flexBox('space-between', '', '')}
  margin-top: 11px;
  min-height: 44px;
`;

const RecentPriceBox = styled.div``;

const RecentPrice = styled.p`
  font-weight: 700;
  line-height: 26px;
`;

const RecentPricePercent = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.buttonSell};
`;

const DealBtnBox = styled.div`
  display: inline-flex;
  margin-top: 17px;
  height: 60px;
  width: 100%;
  border-radius: 10px;
`;

const InfoSection = styled.section``;

const InfoTitle = styled.h3`
  padding: 40px 0 20px;
  font-weight: 700;
`;

const InfoBox = styled.div`
  display: flex;
  padding: 20px 0;
  border-top: ${({ theme }) => theme.globalBoardStyle};
  border-bottom: ${({ theme }) => theme.globalBoardStyle};
`;

const DetailInfoBox = styled.div`
  flex: 1;
  padding: 0 12px;
  border-left: ${({ theme }) => theme.globalBoardStyle};

  &:first-child {
    border: none;
  }
`;

const ModelTitle = styled.div`
  font-size: 12px;
  line-height: 14px;
  color: ${({ theme }) => theme.mainBrandGray05};
`;

const ModelInfo = styled.div`
  font-size: 14px;
  margin-top: 4px;
  line-height: 17px;
  word-break: break-word;
`;

const DeliverySection = styled.section`
  margin-bottom: 20px;
`;

const DeliveryTitle = styled.h3`
  padding-top: 40px;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.mainBrandGray08};
`;

const DeliveryBox = styled.div`
  ${flexBox('null', 'center', 'null')}
  padding: 19px 0 10px;
`;

const DeliveryTextBox = styled.div`
  margin-left: 14px;
  font-size: 14px;
`;

const DeliveryBoldText = styled.span`
  font-weight: 600;
`;

const DeliveryText = styled.p`
  color: ${({ theme }) => theme.mainBrandGray05};
  line-height: 16px;
  margin-top: 3px;
`;

const GuideSection = styled.section`
  padding-top: 20px;
`;

const GuideItem = styled.li`
  ${flexBox('', 'center', '')}
  margin-top: 20px;
`;

const GuideText = styled.span`
  ${flexBox('', '', 'column')}
  margin-left: 14px;
  font-size: 13px;
`;

const GuideTitle = styled.span`
  font-weight: 600;
`;

const GuideDescription = styled.span`
  color: ${({ theme }) => theme.mainBrandGray05};
  line-height: 16px;
  margin-top: 2px;
`;

const NoticeSection = styled.section`
  line-height: 16px;
  font-size: 12px;
  color: ${({ theme }) => theme.mainBrandGray05};
  border-top: ${({ theme }) => theme.globalBoardStyle};
  padding-top: 40px;
  margin-top: 20px;
`;
