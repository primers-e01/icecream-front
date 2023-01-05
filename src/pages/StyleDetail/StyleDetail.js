import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { API } from '../../config/config';
import StyleCard from './StyleCard';

const StyleDetail = () => {
  const [loading, setLoading] = useState(true);
  const [postPage, setPostPage] = useState([]);
  const params = useParams();

  const location = useLocation();

  console.log('state : ', location.state);

  // useEffect(() => {
  //   fetch(`${API.styleDetail}`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({}),
  //   });
  // }, []);

  // if (loading) return <h1>로딩중입니다.</h1>;

  return (
    <Container>
      <Content>
        <SocialPost>
          <StyleCard {...location.state} />
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
