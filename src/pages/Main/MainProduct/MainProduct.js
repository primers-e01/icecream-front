import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const MainProduct = () => {
  const [mainProductData, setMainProductData] = useState([]);
  const navigate = useNavigate();

  const goToShop = () => {
    navigate('/shop');
  };

  useEffect(() => {
    fetch('/data/productData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setMainProductData(data);
      });
  }, []);

  return (
    <MainProductWrapper>
      {mainProductData.map(product => {
        const productPrice = product.price.toLocaleString();
        return (
          <MainProductBox key={product.id}>
            <MainProductThumb>
              <img
                src={product.thumnailImageUrl}
                alt={product.enName}
                onClick={goToShop}
              />
            </MainProductThumb>
            <MainProductBrandTitle>{product.brandName}</MainProductBrandTitle>
            <MainProductTitle>
              <h3>{product.enName}</h3>
              <h4>{product.krName}</h4>
            </MainProductTitle>
            <MainProductPrice>{productPrice}원</MainProductPrice>
            <MainProductCurrentPrice>즉시 구매가</MainProductCurrentPrice>
          </MainProductBox>
        );
      })}
    </MainProductWrapper>
  );
};

export default MainProduct;

const MainProductWrapper = styled.div`
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
    object-position: 0px -30px;
    cursor: pointer;
  }
`;

const MainProductBrandTitle = styled.div`
  margin: 10px 8px;
  display: inline-block;
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.mainBrandBlack};
  border-bottom: 2px solid ${({ theme }) => theme.mainBrandBlack};
`;

const MainProductTitle = styled.p`
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
  font-weight: bold;
`;

const MainProductCurrentPrice = styled.p`
  margin: 5px 8px;
  font-size: 12px;
  color: ${({ theme }) => theme.mainBrandGray05};
`;
