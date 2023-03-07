import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  img: string;
  title: string;
  link: string;
}
const BannerItem = ({ img, title, link }: Props) => {
  return (
    <Wrapper>
      <BannerBox>
        <Link to={link}>
          <img src={img} alt={title} />
        </Link>
      </BannerBox>
      <BannerTitle>{title}</BannerTitle>
    </Wrapper>
  );
};

export default BannerItem;

const Wrapper = styled.li`
  text-align: center;
  width: calc(20% - 10px);
`;

const BannerBox = styled.div`
  margin-top: 15px;
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.mainBrandBlack};
  border-radius: 10px;
  overflow: hidden;

  @media screen and (max-width: 780px) {
    border-radius: 50%;
    aspect-ratio: 1 / 1;
    height: auto;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* object-position: 0px -10px; */
    cursor: pointer;
  }
`;

const BannerTitle = styled.p`
  font-size: 15px;
  margin-top: 8px;
  color: #333;
`;
