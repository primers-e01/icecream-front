import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { API } from '../../config/config';

const Card = props => {
  const {
    userId,
    postId,
    post_image_url,
    profile_image_url,
    nickname,
    likes,
    feed_text,
  } = props;

  const [isToggle, setIsToggle] = useState(false);

  const navigate = useNavigate();

  const isLiked = () => setIsToggle(!isToggle);
  const onImageClick = () => {
    console.log('userId', String(userId));
    console.log('post : ', postId);
    fetch(`${API.styleDetail}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: String(userId),
        postId: String(postId),
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('1111111111', data.data[0]);
        navigate(`/posts/details`, { state: { ...data.data[0] } });
      });
  };
  // to={`/posts/details/${id}`}
  return (
    <FeedCard>
      <div onClick={onImageClick}>
        <FeedImage>
          <UserImage src={post_image_url} />
        </FeedImage>
      </div>
      <User>
        <UserInfo>
          <UserProfileImage src={profile_image_url} />
          <UserId>{nickname}</UserId>
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
