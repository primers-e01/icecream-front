import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { API } from '../../../config/config';

const ShopProduct = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const [shopProductList, setShopProductList] = useState([]);
  const [isScroll, setIsScroll] = useState(false);
  const obsTarget = useRef(null);

  const goToDetail = id => {
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
    fetch(`${API.products}` + search)
      .then(res => res.json())
      .then(data => setShopProductList(data.data));
  }, [search]);

  useEffect(() => {
    const io = new IntersectionObserver(([{ isIntersecting }]) => {
      if (isIntersecting) {
        fetch(`${API.products}`)
          .then(res => res.json())
          .then(result => {
            setShopProductList(prev => [...prev, ...result.data]);
          });
      }
    });

    if (obsTarget.current) {
      io.observe(obsTarget.current);
    }

    return () => {
      io.disconnect();
    };
  }, []);

  return (
    <ShopProductWrapper>
      <SortSelectBox>
        <SortSelect>
          <SortSelectBtn>프리미엄순</SortSelectBtn>
          <SortSelectBtn>발매일순</SortSelectBtn>
        </SortSelect>
      </SortSelectBox>
      <ShopProductList>
        {shopProductList.map(product => {
          const {
            id,
            thumbnailImageUrl,
            enName,
            krName,
            brandName,
            price: _price,
          } = product;
          const price = _price
            .substr(0, _price.length - 3)
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');

          return (
            <ShopProductBox key={id}>
              <ShopProductThumb>
                <img
                  src={thumbnailImageUrl}
                  alt={enName}
                  onClick={() => goToDetail(id)}
                />
              </ShopProductThumb>
              <ShopProductBrandTitle>{brandName}</ShopProductBrandTitle>
              <ShopProductTitle>
                <h3>{enName}</h3>
                <h4>{krName}</h4>
              </ShopProductTitle>
              <ShopProductPrice>
                {!_price ? '-' : price + '원'}
              </ShopProductPrice>
              <ShopProductCurrentPrice>즉시 구매가</ShopProductCurrentPrice>
            </ShopProductBox>
          );
        })}
      </ShopProductList>
      {isScroll && <AtTheTop onClick={onClickGoToTop}>&#8593;</AtTheTop>}
      <ProductObserverTarget ref={obsTarget} />
    </ShopProductWrapper>
  );
};

export default ShopProduct;

const ShopProductWrapper = styled.div``;

const SortSelectBox = styled.div`
  width: 100%;
  position: relative;
`;

const SortSelect = styled.div`
  width: 170px;
  display: flex;
  justify-content: space-between;
  position: absolute;
`;

const SortSelectBtn = styled.button`
  all: unset;
  padding: 10px 12px;
  font-size: 14px;
  text-align: center;
  background-color: ${({ theme }) => theme.buttonDisabled};
  border-radius: 30px;

  &:hover {
    background-color: ${({ theme }) => theme.buttonActive};
    color: white;
  }
`;

const ShopProductList = styled.div`
  /* width: 900px; */
  padding-top: 50px;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ShopProductBox = styled.div`
  width: 250px;
  margin-bottom: 20px;
`;

const ShopProductThumb = styled.div`
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

const ShopProductBrandTitle = styled.h3`
  margin: 10px 8px;
  display: inline-block;
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.mainBrandBlack};
  border-bottom: 2px solid ${({ theme }) => theme.mainBrandBlack};
`;

const ShopProductTitle = styled.div`
  margin: 0px 8px;
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

const ShopProductPrice = styled.p`
  margin: 12px 0px 0px 8px;
  font-size: 16px;
  font-weight: bold;
`;

const ShopProductCurrentPrice = styled.p`
  margin: 5px 8px;
  font-size: 12px;
  color: ${({ theme }) => theme.mainBrandGray05};
`;

const AtTheTop = styled.div`
  width: 45px;
  height: 45px;
  position: fixed;
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
    color: white;
  }
`;

const ProductObserverTarget = styled.div`
  width: 100%;
  height: 300px;
`;
