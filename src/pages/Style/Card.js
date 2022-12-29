import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';

const Card = props => {
  const { id, post_image_url, profile_image_url, nickName, likes, feed_text } =
    props;

  const [isToggle, setIsToggle] = useState(false);
  const isLiked = () => {
    setIsToggle(!isToggle);
  };

  return (
    <FeedCard>
      <Link to={`/style-detail/${id}`}>
        <FeedImage>
          <UserImage src={post_image_url} />
        </FeedImage>
      </Link>
      <User>
        <UserInfo>
          <UserProfileImage src={profile_image_url} />
          <UserId>{nickName}</UserId>
        </UserInfo>
        <Like>
          <Liked>
            <FontAwesomeIcon
              onClick={isLiked}
              icon={isToggle ? solidHeart : regularHeart}
              className={isToggle ? 'like' : 'unlike'}
              size="lg"
            />
          </Liked>
          <LikeCount>{isToggle === true ? Number(likes) + 1 : likes}</LikeCount>
        </Like>
      </User>
      <FeedText>{feed_text}</FeedText>
    </FeedCard>
  );
};

export default Card;

const FeedCard = styled.div`
  width: 300px;
  margin: 10px;
  margin-bottom: 30px;
`;

const FeedImage = styled.div`
  width: 100%;
  height: auto;
  cursor: pointer;
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
  margin: 6px;
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

const Like = styled.div`
  display: flex;
  align-items: center;
`;

const Liked = styled.div`
  display: flex;
  cursor: pointer;
  & .like * {
    color: red;
  }
  & .unlike * {
    color: lightgray;
  }
`;

const LikeCount = styled.p`
  margin-left: 5px;
  color: #bebebe;
`;

const FeedText = styled.p`
  margin: 10px 0;
  font-size: 14px;
`;
