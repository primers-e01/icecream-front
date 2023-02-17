import React from 'react';
import styled from 'styled-components';

interface Props {
  img: string;
  title: string;
}
const ShortCutItem = ({ img, title }: Props) => {
  return (
    <Wrapper>
      <ShortCutItemBox>
        <img src={img} alt={title} />
      </ShortCutItemBox>
      <ShortCutItemTitle>{title}</ShortCutItemTitle>
    </Wrapper>
  );
};

export default ShortCutItem;

const Wrapper = styled.div`
  text-align: center;
`;

const ShortCutItemBox = styled.div`
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

const ShortCutItemTitle = styled.p`
  margin-top: 8px;
  color: #333;
`;
