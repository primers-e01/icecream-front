import React, { useState } from 'react';
import AsideCategory from './AsideCategory/AsideCategory';
import ShopProduct from './ShopProduct/ShopProduct';
import styled from 'styled-components';
import { getQueryString } from '../../utils/queryString';
import { useNavigate } from 'react-router-dom';
import { Query } from './types';

const INIT_QUERY = {
  categoryId: '',
  shoesize: '',
  clothsize: '',
};

const Shop = () => {
  const [queries, setQueries] = useState<Query>(INIT_QUERY);
  const navigate = useNavigate();
  const onClickQuery = (categoryKey: string, query: number | string) => {
    setQueries({ ...queries, [categoryKey]: query });
    navigate(`/shop${getQueryString({ ...queries, [categoryKey]: query })}`);
  };

  return (
    <Wrapper>
      <ShopAsideBox>
        {Object.entries(SHOP_CATEGORY).map(
          ([key, { title, subTitle, subCategory }]) => {
            return (
              <AsideCategory
                key={key}
                categoryKey={key}
                title={title}
                subTitle={subTitle}
                subCategory={subCategory}
                onClickQuery={onClickQuery}
              />
            );
          }
        )}
      </ShopAsideBox>
      <ShopProduct />
    </Wrapper>
  );
};

export default Shop;

const Wrapper = styled.div`
  display: flex;
  margin: 100px auto 0;
  padding: 50px 40px 120px;
  max-width: 1280px;
`;

const ShopAsideBox = styled.div`
  min-width: 200px;
  margin-right: 20px;
`;

const SHOP_CATEGORY = {
  categoryId: {
    title: '카테고리',
    subTitle: '모든 카테고리',
    subCategory: [
      { id: 1, query: '1', text: '신발' },
      { id: 2, query: '2', text: '의류' },
      { id: 3, query: '3', text: '패션잡화' },
    ],
  },
  size: {
    title: '신발 사이즈',
    subTitle: '모든 사이즈',
    subCategory: [
      { id: 1, query: 230, text: 230 },
      { id: 2, query: 240, text: 240 },
      { id: 3, query: 250, text: 250 },
      { id: 4, query: 260, text: 260 },
      { id: 5, query: 270, text: 270 },
      { id: 6, query: 280, text: 280 },
    ],
  },
  clothsize: {
    title: '의류 사이즈',
    subTitle: '모든 사이즈',
    subCategory: [
      { id: 1, query: 'S', text: 'S' },
      { id: 2, query: 'M', text: 'M' },
      { id: 3, query: 'L', text: 'L' },
      { id: 4, query: 'XL', text: 'XL' },
    ],
  },
};
