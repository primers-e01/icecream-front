import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MainProduct from '../MainProduct/MainProduct';
import styled from 'styled-components';
import { positionCenter } from '../../../styles/mixin';

const MainReuse = () => {
  const [isScroll, setIsScroll] = useState(false);

  const onClickGoToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY < 500;
      setIsScroll(!isTop);
    });
  }, []);

  return (
    <MainReuseWrapper>
      {MAIN_BANNER.map(
        ({ id, title, subTitle, img, categoryTitle, categorySubTitle }) => {
          return (
            <MainReuseBox key={id}>
              <MainBanner>
                <MainBannerTitle>{title}</MainBannerTitle>
                <MainBannerSubTitle>{subTitle}</MainBannerSubTitle>
                <img src={img} alt={title} />
                <button>
                  <Link to="/shop">지금 거래하기 &#12297;</Link>
                </button>
              </MainBanner>
              <MainProductAlignBox>
                <MainCategoryTitle>{categoryTitle}</MainCategoryTitle>
                <MainCategorySubTitle>{categorySubTitle}</MainCategorySubTitle>
                <MainProduct />
              </MainProductAlignBox>
            </MainReuseBox>
          );
        }
      )}
      {isScroll && <AtTheTop onClick={onClickGoToTop}>&#8593;</AtTheTop>}
    </MainReuseWrapper>
  );
};

export default MainReuse;

const MainReuseWrapper = styled.div`
  position: relative;
`;
const MainReuseBox = styled.div``;

const MainBanner = styled.div`
  width: 100%;
  height: 400px;
  margin-top: 45px;
  position: relative;
  background-color: ${({ theme }) => theme.mainBrandBlack};
  overflow: hidden;

  img {
    width: 100%;
    object-position: 0px -1300px;
    opacity: 0.6;
    filter: blur(4px);
  }

  button {
    all: unset;
    position: absolute;
    bottom: 100px;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 20px;
    border-bottom: ${({ theme }) => theme.globalBoardStyle};
    color: white;

    &:hover {
      cursor: pointer;
    }
  }
`;

const MainBannerTitle = styled.h1`
  ${positionCenter('absolute')}
  top: 30%;
  z-index: 999;
  font-size: 50px;
  font-weight: bold;
  color: white;
`;

const MainBannerSubTitle = styled.h2`
  ${positionCenter('absolute')}
  top: 42%;
  z-index: 999;
  font-size: 22px;
  color: rgba(255, 255, 255, 0.7);
`;

const MainProductAlignBox = styled.div`
  width: 75%;
  margin: 0 auto;
`;

const MainCategoryTitle = styled.h3`
  margin-top: 50px;
  color: ${({ theme }) => theme.mainBrandBlack};
  font-size: 20px;
  font-weight: bold;
`;

const MainCategorySubTitle = styled.h4`
  margin: 5px 0px;
  color: ${({ theme }) => theme.mainBrandGray05};
  font-size: 14px;
`;

const AtTheTop = styled.div`
  width: 45px;
  height: 45px;
  position: absolute;
  right: 80px;
  bottom: 0px;
  font-size: 20px;
  text-align: center;
  line-height: 40px;
  border: 1px solid ${({ theme }) => theme.mainBrandBlack};
  border-radius: 50%;

  &:hover {
    background-color: ${({ theme }) => theme.mainBrandBlack};
    color: white;
  }
`;

const MAIN_BANNER = [
  {
    id: 1,
    title: 'The Best of 2022',
    subTitle: '올해 ICECREAM을 빛낸 아이템',
    img: 'https://images.unsplash.com/photo-1590371447356-10bdb441b91d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=626&q=80',
    categoryTitle: 'Most Popular',
    categorySubTitle: '인기 상품',
  },
  {
    id: 2,
    title: 'Under Retail',
    subTitle: '정가보다 저렴한 시세',
    img: 'https://images.unsplash.com/photo-1574427797991-b086946fa9e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    categoryTitle: 'New In',
    categorySubTitle: '신규 등록 상품',
  },
];
