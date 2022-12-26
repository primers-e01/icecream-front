import React from 'react';
import MainCarousel from './MainCarousel/MainCarousel';
import MainShortCutItem from './MainShortCutItem/MainShortCutItem';
import MainReuse from './MainReuse/MainReuse';
import styled from 'styled-components';

const Main = () => {
  return (
    <MainWrapper>
      <MainCarousel />
      <MainBox>
        <MainShortCutList>
          {MAIN_SHORTCUT.map(({ id, img, categoryName }) => (
            <MainShortCutItem key={id} img={img} title={categoryName} />
          ))}
        </MainShortCutList>
        <MainReuse />
      </MainBox>
    </MainWrapper>
  );
};

export default Main;

const MainWrapper = styled.div`
  padding-top: 101px;
`;

const MainBox = styled.div`
  margin-top: 35px;
`;

const MainShortCutList = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const MAIN_SHORTCUT = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    categoryName: '한정판',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    categoryName: '남성추천',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1620739482082-17c6c0a2fe2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=948&q=80',
    categoryName: '여성추천',
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1620739531203-7fdb5407ce32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=818&q=80',
    categoryName: '셀럽픽',
  },
  {
    id: 5,
    img: 'https://images.unsplash.com/photo-1591892150204-2f872745bc4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    categoryName: '이번주 브랜드관',
  },
  {
    id: 6,
    img: 'https://images.unsplash.com/photo-1611403570720-162d8829689a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80 ',
    categoryName: '정가 아래',
  },
  {
    id: 7,
    img: 'https://images.unsplash.com/photo-1589363460779-cd717d2ed8fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
    categoryName: '인기 럭셔리',
  },
  {
    id: 8,
    img: 'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    categoryName: '연말 선물',
  },
  {
    id: 9,
    img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    categoryName: '겨울 코디',
  },
  {
    id: 10,
    img: 'https://images.unsplash.com/photo-1611403570720-162d8829689a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    categoryName: '수수료 할인',
  },
];
