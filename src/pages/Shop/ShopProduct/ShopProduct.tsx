import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
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

  // useEffect(() => {
  //   const observer = new IntersectionObserver(([{ isIntersecting }]) => {
  //     if (isIntersecting) {
  //       fetch(`${API.products}`)
  //         .then(res => res.json())
  //         .then(result => {
  //           setShopProductList(prev => [...prev, ...result.data]);
  //         });
  //     }
  //   });

  //   if (obsTarget.current) {
  //     observer.observe(obsTarget.current);
  //   }

  //   return () => {
  //     observer.disconnect();
  //   };
  // }, []);

  useEffect(() => {
    fetch(`${API.products}` + search)
      // fetch('/data/shopData.json')
      .then(res => res.json())
      .then(data => {
        setShopProductList(data.data);
        // setShopProductList(data);
      });
  }, [search]);

  return (
    <Wrapper>
      <SortSelectBox>
        <SortSelectBtn>프리미엄순</SortSelectBtn>
        <SortSelectBtn>발매일순</SortSelectBtn>
      </SortSelectBox>
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
      {isScroll && <AtTheTop onClick={onClickGoToTop}>&#8593;</AtTheTop>}
      <ProductObserverTarget ref={obsTarget} />
    </Wrapper>
  );
};

export default ShopProduct;

const Wrapper = styled.div``;

const SortSelectBox = styled.div`
  display: flex;
  gap: 6px;
`;

const SortSelectBtn = styled.button`
  all: unset;
  padding: 10px 12px;
  font-size: 14px;
  text-align: center;
  background-color: transparent;
  border: ${({ theme }) => theme.globalBorderStyle};
  border-radius: 30px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.buttonActive};
    color: #fff;
  }
`;

const ShopProductList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  padding-top: 50px;
`;

const ShopProductBox = styled.div`
  width: 250px;
  margin-bottom: 20px;
`;

const ThumbnailImg = styled.div`
  width: 250px;
  height: 250px;
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

const AtTheTop = styled.div`
  position: fixed;
  width: 45px;
  height: 45px;
  right: 80px;
  bottom: 50px;
  font-size: 20px;
  text-align: center;
  line-height: 40px;
  box-shadow: ${({ theme }) => theme.globalBoxShadow};
  border: ${({ theme }) => theme.globalBorderStyle};
  border-radius: 50%;

  &:hover {
    background-color: ${({ theme }) => theme.mainBrandBlack};
    color: #fff;
  }
`;

const ProductObserverTarget = styled.div`
  width: 100%;
  height: 300px;
`;
