import React, { useState } from 'react';
import styled from 'styled-components';

const AsideCategory = ({
  cateKey,
  title,
  subTitle,
  subCategory,
  onClickQuery,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickCate = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AsideCategoryWrapper>
      <CategoryListBox key={cateKey}>
        <CategoryTitleBox>
          <CategoryTitle>{title}</CategoryTitle>
          <CategorySubTitle>{subTitle}</CategorySubTitle>
        </CategoryTitleBox>
        <PlusBtn onClick={onClickCate}>+</PlusBtn>
      </CategoryListBox>
      <AsideOpenList key={cateKey} className={isOpen ? '' : 'open'}>
        {subCategory &&
          subCategory.map(({ query, text }) => {
            return (
              <AsideOpenItem key={query}>
                <AsideOpenBtn onClick={() => onClickQuery(cateKey, query)}>
                  {text}
                </AsideOpenBtn>
              </AsideOpenItem>
            );
          })}
      </AsideOpenList>
    </AsideCategoryWrapper>
  );
};

export default AsideCategory;

const AsideCategoryWrapper = styled.div``;

const CategoryListBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: ${({ theme }) => theme.globalBoardStyle};
`;

const CategoryTitleBox = styled.div`
  padding: 20px 0px;
`;

const CategoryTitle = styled.h2`
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const CategorySubTitle = styled.h3`
  font-size: 13px;
  color: ${({ theme }) => theme.mainBrandGray05};
`;

const PlusBtn = styled.span`
  font-size: 25px;
  font-weight: lighter;
  cursor: pointer;
  color: ${({ theme }) => theme.mainBrandGray05};
`;

const AsideOpenList = styled.ul`
  border-bottom: ${({ theme }) => theme.globalBoardStyle};
  max-height: 540px;
  overflow: hidden;
  transition: max-height ease-in-out 2s 0s;

  &.open {
    max-height: 0px;
  }
`;

const AsideOpenItem = styled.li``;

const AsideOpenBtn = styled.button`
  all: unset;
  font-size: 13px;
  padding: 6px 9px;
  margin: 5px 0px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.mainBrandGray05};
  cursor: pointer;

  &.active {
    background-color: ${({ theme }) => theme.buttonActive};
    color: white;
  }
`;
