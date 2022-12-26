import React from 'react';
import styled from 'styled-components';

const MainShortCutItem = ({ img, title }) => {
  return (
    <MainShortCutItemWrapper>
      <MainShortCutItemBox>
        <img src={img} alt={title} />
      </MainShortCutItemBox>
      <MainShortCutItemTitle>{title}</MainShortCutItemTitle>
    </MainShortCutItemWrapper>
  );
};

export default MainShortCutItem;

const MainShortCutItemWrapper = styled.div`
  text-align: center;
`;

const MainShortCutItemBox = styled.div`
  margin-top: 15px;
  width: 200px;
  height: 100px;
  background-color: ${({ theme }) => theme.mainBrandBlack};
  border-radius: 10px;
  overflow: hidden;

  img {
    width: 100%;
    object-position: 0px -10px;
    cursor: pointer;
  }
`;

const MainShortCutItemTitle = styled.p`
  margin-top: 8px;
  color: #333;
`;
