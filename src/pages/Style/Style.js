import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Style = () => {
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    fetch('/data/data.json')
      .then(response => response.json())
      .then(result => setFeedList(result));
  }, []);

  return (
    <SocialHeader>
      <StyleTab>
        <ItemTab>인기</ItemTab>
        <ItemTab>최신</ItemTab>
      </StyleTab>
      <Container>
        <SocialFeed>
          {feedList.map(feed => {
            return (
              <FeedCard key={feed.id}>
                <FeedImage>
                  <UserImage src={feed.post_image_url} />
                </FeedImage>
                <User>
                  <UserInfo>
                    <UserProfileImage src={feed.profile_image_url} />
                    <UserId>{feed.nickName}</UserId>
                  </UserInfo>
                  <Like>
                    <LikeButton>
                      <FontAwesomeIcon
                        icon="fa-regular fa-face-smile"
                        size="lg"
                        color="gray"
                      />
                    </LikeButton>
                    <LikeCount>{feed.likes}</LikeCount>
                  </Like>
                </User>
                <FeedText>{feed.feed_text}</FeedText>
              </FeedCard>
            );
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
  border-radius: 22px;
  background-color: black;
  color: white;
  &:hover {
    cursor: pointer;
  }
`;

const Container = styled.div`
  padding: 30px 40px;
  width: 100%;
  height: auto;
`;

const SocialFeed = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 140px;
`;

const FeedCard = styled.div`
  width: 300px;
  margin: 10px;
`;

const FeedImage = styled.div`
  width: 100%;
  height: auto;
`;
const UserImage = styled.img`
  width: 300px;
  height: 400px;
  border-radius: 10px;
  object-fit: cover;
`;

const User = styled.div`
  display: flex;
  align-items: center;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;
  width: 100%;
  height: auto;
`;

const UserProfileImage = styled.img`
  width: 28px;
  border-radius: 50%;
`;

const UserId = styled.p`
  margin-left: 5px;
  font-size: 17px;
`;

const LikeButton = styled.div`
  display: flex;
`;

const LikeCount = styled.p`
  margin-left: 5px;
  color: gray;
`;

const FeedText = styled.p`
  margin: 10px 0;
`;

const Like = styled.div`
  display: flex;
`;

export default Style;
