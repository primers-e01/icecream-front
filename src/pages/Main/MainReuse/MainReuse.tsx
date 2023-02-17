import React from 'react';
import { Link } from 'react-router-dom';
import MainProduct from '../MainProduct/MainProduct';
import styled from 'styled-components';
import { positionCenter } from '../../../styles/mixin';

const MainReuse = () => {
  return (
    <Wrapper>
      {MAIN_BANNER.map(
        ({ id, title, subTitle, img, categoryTitle, categorySubTitle }) => {
          return (
            <MainReuseBox key={id}>
              <MainBanner>
                <MainBannerTitle>{title}</MainBannerTitle>
                <MainBannerSubTitle>{subTitle}</MainBannerSubTitle>
                <img src={img} alt={title} />
                <button>
                  <Link to="/products">지금 거래하기 &#12297;</Link>
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
    </Wrapper>
  );
};

export default MainReuse;

const Wrapper = styled.div`
  position: relative;
`;
const MainReuseBox = styled.div``;

const MainBanner = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 400px;
  margin-top: 45px;
  background-color: ${({ theme }) => theme.mainBrandBlack};

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
    border-bottom: ${({ theme }) => theme.globalBorderStyle};
    color: #fff;

    &:hover {
      cursor: pointer;
    }
  }
`;

const MainBannerTitle = styled.h1`
  ${positionCenter('absolute')}
  top: 30%;
  z-index: ${({ theme }) => theme.mainBanner};
  font-size: 50px;
  font-weight: 700;
  color: #fff;
`;

const MainBannerSubTitle = styled.h2`
  ${positionCenter('absolute')}
  top: 42%;
  z-index: ${({ theme }) => theme.mainBanner};
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
  font-weight: 700;
`;

const MainCategorySubTitle = styled.h4`
  margin: 5px 0px;
  color: ${({ theme }) => theme.mainBrandGray05};
  font-size: 14px;
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
