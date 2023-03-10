import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { API } from '../../../config/config';
import { ShopData } from '../types';

const ShopProduct = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const [shopProductList, setShopProductList] = useState<ShopData[]>([]);
  const [isScroll, setIsScroll] = useState(false);
  const obsTarget = useRef(null);

  const goToDetail = (id: number) => {
    navigate(`/detail/${id}`);
  };

  const onClickGoToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY < 800;
      setIsScroll(!isTop);
    });
  }, []);

  useEffect(() => {
    axios
      .get(`${API.products}` + search)
      .then(result => {
        setShopProductList(result.data.data);
      })
      .catch(
        error =>
          error.message === 'Network Error' &&
          alert('백엔드 서버가 꺼져있습니다')
      );
  }, [search]);

  return (
    <Wrapper>
      <ShopProductList>
        {shopProductList.map(
          ({ id, thumbnailImageUrl, enName, krName, brandName, price }) => {
            return (
              <ShopProductBox key={id}>
                <ThumbnailImg>
                  <img
                    src={thumbnailImageUrl}
                    alt={enName}
                    onClick={() => goToDetail(id)}
                  />
                </ThumbnailImg>

                <ProductDetailBox>
                  <BrandName>{brandName}</BrandName>
                  <ModelName>
                    <h3>{enName}</h3>
                    <h4>{krName}</h4>
                  </ModelName>
                  <Price>
                    {price ? Number(price).toLocaleString('ko-KR') + '원' : '-'}
                  </Price>
                  <CurrentPrice>즉시 구매가</CurrentPrice>
                </ProductDetailBox>
              </ShopProductBox>
            );
          }
        )}
      </ShopProductList>
      {isScroll && <GoToTop onClick={onClickGoToTop}>&#8593;</GoToTop>}
      <ProductObserverTarget ref={obsTarget} />
    </Wrapper>
  );
};

export default ShopProduct;

const Wrapper = styled.div``;

const ShopProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 780px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ShopProductBox = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const ThumbnailImg = styled.div`
  aspect-ratio: 1 / 1;
  border-radius: 10px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.8s ease-in-out;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const ProductDetailBox = styled.div`
  margin: 10px 8px;
`;

const BrandName = styled.h3`
  display: inline-block;
  margin: 10px 0px;
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.mainBrandBlack};
`;

const ModelName = styled.div`
  color: ${({ theme }) => theme.mainBrandGray08};
  font-size: 14px;
  line-height: 17px;

  h3 {
    font-size: 14px;
  }

  h4 {
    font-size: 12px;
    color: ${({ theme }) => theme.mainBrandGray05};
  }
`;

const Price = styled.p`
  margin: 12px 0px 8px;
  font-size: 16px;
  font-weight: 700;
`;

const CurrentPrice = styled.p`
  margin: 5px 0px;
  font-size: 12px;
  color: ${({ theme }) => theme.mainBrandGray05};
`;

const GoToTop = styled.div`
  position: fixed;
  width: 45px;
  height: 45px;
  right: 50px;
  bottom: 50px;
  font-size: 20px;
  text-align: center;
  line-height: 40px;
  background-color: #fff;
  box-shadow: ${({ theme }) => theme.globalBoxShadow};
  border: ${({ theme }) => theme.globalBorderStyle};
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.mainBrandBlack};
    color: #fff;
  }
`;

const ProductObserverTarget = styled.div`
  width: 100%;
  height: 300px;
`;
