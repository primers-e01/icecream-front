import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import Card from './Card';
import { flexBox } from '../../styles/mixin';
import { API } from '../../config/config';

interface Feed {
  id: number;
  userId: number;
  postId: number;
  post_image_url: string;
  profile_image_url: string;
  nickname: string;
  likes: number;
  feed_text: string;
}

const Style = () => {
  const [feedList, setFeedList] = useState<Feed[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [clickedFilter, setClickedFilter] = useState('trend');

  useEffect(() => {
    fetch(`${API.style}?${String(searchParams)}`)
      .then(response => response.json())
      .then(data => setFeedList(data.posts));
  }, [searchParams]);

  const onClickTrend = () => {
    searchParams.set('filterBy', 'trending');
    setSearchParams(searchParams);
    setClickedFilter('trend');
  };

  const onClickNewest = () => {
    searchParams.set('filterBy', 'newest');
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
  ${flexBox('', '', 'column')}
  width: 100%;
`;

const StyleTab = styled.div`
  ${flexBox()}
  position: fixed;
  padding: 18px 10px;
  top: 100px;
  width: 100%;
  background-color: #fff;
`;

const ItemTab = styled.button<{ active: boolean }>`
  padding: 8px 12px;
  font-size: 18px;
  font-weight: 700;
  border: none;
  border-radius: 22px;
  background-color: ${props => (props.active ? '#000' : '#fff')};
  color: ${props => (props.active ? '#fff' : '#000')};
  cursor: pointer;
`;

const Container = styled.div`
  padding: 30px 40px 120px;
  max-width: 1360px;
  height: auto;
  margin: 0 auto;
`;

const SocialFeed = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 140px;
`;

export default Style;
