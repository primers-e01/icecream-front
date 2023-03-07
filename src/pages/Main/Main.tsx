import React, { useEffect, useState } from 'react';
import MainCarousel from './MainCarousel/MainCarousel';
import ShortCutItem from './BannerItem/BannerItem';
import styled from 'styled-components';

const Main = () => {
  return (
    <Wrapper>
      <MainCarousel />
      <MainBox>
        <BannerList>
          {MAIN_SHORTCUT.map(({ id, img, title, link }) => (
            <ShortCutItem key={id} img={img} title={title} link={link} />
          ))}
        </BannerList>
      </MainBox>
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  padding-top: 101px;
`;

const MainBox = styled.div`
  margin: 0 auto;
  padding: 40px 40px 80px;
  max-width: 1280px;
`;

const BannerList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
  margin: 0 auto;
`;

const MAIN_SHORTCUT = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    link: '/shop/?categoryId=3',
    title: '패션잡화',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    link: '/shop/?categoryId=2',
    title: '의류',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1620739482082-17c6c0a2fe2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=948&q=80',
    link: '/shop/?categoryId=1',
    title: '신발',
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1620739531203-7fdb5407ce32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=818&q=80',
    link: '/shop',
    title: '최고 인기제품',
  },
  {
    id: 5,
    img: 'https://images.unsplash.com/photo-1591892150204-2f872745bc4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    link: '/shop',
    title: '이번주 브랜드관',
  },
  {
    id: 6,
    img: 'https://images.unsplash.com/photo-1611403570720-162d8829689a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80 ',
    link: '/shop',
    title: '정가 아래',
  },
  {
    id: 7,
    img: 'https://images.unsplash.com/photo-1589363460779-cd717d2ed8fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
    link: '/shop',
    title: '인기 럭셔리',
  },
  {
    id: 8,
    img: 'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    link: '/shop',
    title: '연말 선물',
  },
  {
    id: 9,
    img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    link: '/shop',
    title: '겨울 코디',
  },
  {
    id: 10,
    img: 'https://images.unsplash.com/photo-1611403570720-162d8829689a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    link: '/shop',
    title: '수수료 할인',
  },
];
