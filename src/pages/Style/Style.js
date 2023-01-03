import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import Card from './Card';

const Style = () => {
  const [feedList, setFeedList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [clickedFilter, setClickedFilter] = useState('trend');

  useEffect(() => {
    fetch('/data/StyleData.json')
      .then(response => response.json())
      .then(result => setFeedList(result));
  }, [searchParams]);

  const onClickTrend = () => {
    searchParams.set('sort', 'trending');
    setSearchParams(searchParams);
    setClickedFilter('trend');
  };

  const onClickNewest = () => {
    searchParams.set('sort', 'newest');
    setSearchParams(searchParams);
    setClickedFilter('newest');
  };

  return (
    <SocialHeader>
      <StyleTab>
        <ItemTab active={clickedFilter === 'trend'} onClick={onClickTrend}>
          인기
        </ItemTab>
        <ItemTab active={clickedFilter === 'newest'} onClick={onClickNewest}>
          최신
        </ItemTab>
      </StyleTab>
      <Container>
        <SocialFeed>
          {feedList.map(feed => {
            return <Card key={feed.id} {...feed} />;
          })}
        </SocialFeed>
      </Container>
    </SocialHeader>
  );
};

const SocialHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StyleTab = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  padding: 18px 10px;
  top: 100px;
  width: 100%;
  background-color: white;
`;

const ItemTab = styled.button`
  padding: 8px 12px;
  font-size: 18px;
  font-weight: 700;
  border: none;
  border-radius: 22px;
  background-color: ${props => (props.active ? 'black' : 'white')};
  color: ${props => (props.active ? 'white' : 'black')};
  cursor: pointer;
`;

const Container = styled.div`
  padding: 30px 250px;
  width: 100%;
  height: auto;
`;

const SocialFeed = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 140px;
`;

export default Style;
