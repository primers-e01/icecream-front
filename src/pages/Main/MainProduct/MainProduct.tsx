import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { API } from '../../../config/config';

interface mainProductList {
  id: string;
  thumbnailImageUrl: string;
  enName: string;
  krName: string;
  brandName: string;
  price: string;
}

const MainProduct = () => {
  const [mainProductList, setMainProductList] = useState<mainProductList[]>([]);
  const navigate = useNavigate();
  const obsTarget = useRef(null);

  useEffect(() => {
    fetch(`${API.products}`)
      .then(res => res.json())
      .then(data => {
        setMainProductList(data.data);
      });
  }, []);

  useEffect(() => {
    fetch(`${API.products}`)
      .then(res => res.json())
      .then(result => {
        setMainProductList(prev => [...prev, ...result.data]);
      });
  }, []);

  // TODO: 무한스크롤 API 추가후 수정
  // useEffect(() => {
  //   const observer = new IntersectionObserver(([{ isIntersecting }]) => {
  //     if (isIntersecting) {
  //       fetch(`${API.products}`)
  //         .then(res => res.json())
  //         .then(result => {
  //           setMainProductList(prev => [...prev, ...result.data]);
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

  return (
    <Wrapper>
      {mainProductList.map(
        ({
          id,
          thumbnailImageUrl,
          enName,
          krName,
          brandName,
          price: _price,
        }) => {
          // TODO: 콤마찍는 로직 수정 -> toLocaleString
          const price = _price
            .substr(0, _price.length - 3)
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');

          return (
            <MainProductBox key={id}>
              <MainProductThumb>
                <img
                  src={thumbnailImageUrl}
                  alt={enName}
                  onClick={() => navigate('/products')}
                />
              </MainProductThumb>
              <MainProductBrandTitle>{brandName}</MainProductBrandTitle>
              <MainProductTitle>
                <h3>{enName}</h3>
                <h4>{krName}</h4>
              </MainProductTitle>
              <MainProductPrice>
                {!_price ? '-' : price + '원'}
              </MainProductPrice>
              <MainProductCurrentPrice>즉시 구매가</MainProductCurrentPrice>
            </MainProductBox>
          );
        }
      )}
      <ProductObserverTarget ref={obsTarget} />
    </Wrapper>
  );
};

export default MainProduct;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 80px;
`;

const MainProductBox = styled.div`
  width: 250px;
  margin: 40px 0px;
`;

const MainProductThumb = styled.div`
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

const MainProductBrandTitle = styled.div`
  margin: 10px 8px;
  display: inline-block;
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.mainBrandBlack};
  border-bottom: 2px solid ${({ theme }) => theme.mainBrandBlack};
`;

const MainProductTitle = styled.div`
  margin: 0px 8px;
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

const MainProductPrice = styled.p`
  margin: 12px 0px 0px 8px;
  font-size: 16px;
  font-weight: 700;
`;

const MainProductCurrentPrice = styled.p`
  margin: 5px 8px;
  font-size: 12px;
  color: ${({ theme }) => theme.mainBrandGray05};
`;

const ProductObserverTarget = styled.div`
  width: 100%;
  height: 300px;
`;
