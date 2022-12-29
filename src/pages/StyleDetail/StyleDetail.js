import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import StyleCard from './StyleCard';

const StyleDetail = () => {
  const [loading, setLoading] = useState(true);
  const [postPage, setPostPage] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch('/data/StyleData.json')
      .then(response => response.json())
      .then(result => {
        setPostPage(result);
        setLoading(false);
      });
  }, []);

  if (loading) return <h1>로딩중입니다.</h1>;

  return (
    <Container>
      <Content>
        <SocialPost>
          {postPage.map(post => {
            return <StyleCard key={post.id} {...post} />;
          })}
        </SocialPost>
      </Content>
    </Container>
  );
};

export default StyleDetail;

const Container = styled.div`
  margin-top: 130px;
  margin-bottom: 20px;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const SocialPost = styled.div`
  width: 700px;
`;
