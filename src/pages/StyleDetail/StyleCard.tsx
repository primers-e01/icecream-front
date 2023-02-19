import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { flexBox } from '../../styles/mixin';
import {
  faHeart as regularHeart,
  faShareFromSquare,
} from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';

interface Props {
  post_image_url: string;
  en_name: string;
  feed_text: string;
  likes: number;
  nickname: string;
  original_price: number;
  profile_image_url: string;
  thumbnail_image_url: string;
}

const StyleCard = ({
  post_image_url,
  en_name,
  feed_text,
  likes,
  nickname,
  original_price,
  profile_image_url,
  thumbnail_image_url,
}: Props) => {
  const [isToggle, setIsToggle] = useState(false);
  const isLiked = () => {
    setIsToggle(!isToggle);
  };

  return (
    <>
      <UserInfoState>
        <UserInfo>
          <UserProfileImage src={profile_image_url} />
          <UserId>{nickname}</UserId>
        </UserInfo>
        <FollowButton>팔로우</FollowButton>
      </UserInfoState>
      <PostImage>
        <UserPostImage src={post_image_url} />
      </PostImage>
      <SocialProduct>
        <ProductTitle>
          <ProductTitleText>
            상품 태그 <TextStrong>1</TextStrong>개
          </ProductTitleText>
        </ProductTitle>
      </SocialProduct>
      <ProductList>
        <ProductItem>
          <ProductImage src={thumbnail_image_url} />
        </ProductItem>
        <ProductItem>
          <ProductName>{en_name}</ProductName>
        </ProductItem>
        <ProductItem>
          <ProductPrice>
            {Math.floor(original_price).toLocaleString('ko-KR')}원
          </ProductPrice>
        </ProductItem>
      </ProductList>
      <SocialContent>
        <SocialLikeBox>
          <SocialLikedButton>
            <FontAwesomeIcon
              onClick={isLiked}
              icon={isToggle ? solidHeart : regularHeart}
              className={isToggle ? 'like' : 'unlike'}
              size="2x"
            />
          </SocialLikedButton>
          <SocialLikeButtonText>
            공감
            <TextStrong>
              {isToggle === true ? Number(likes) + 1 : likes}
            </TextStrong>
            개
          </SocialLikeButtonText>
        </SocialLikeBox>
        <ShareButton>
          <FontAwesomeIcon
            className="share"
            icon={faShareFromSquare}
            size="2x"
          />
        </ShareButton>
      </SocialContent>
      <SocialText>{feed_text}</SocialText>
    </>
  );
};

export default StyleCard;

const UserInfoState = styled.div`
  ${flexBox('space-between')}
  width: 100%;
  height: auto;
`;

const UserInfo = styled.div`
  ${flexBox('', 'center', '')}
  width: 200px;
`;

const UserProfileImage = styled.img`
  width: 45px;
  border-radius: 50%;
`;

const UserId = styled.span`
  margin-left: 10px;
  padding-bottom: 10px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
`;

const FollowButton = styled.button`
  width: 100px;
  height: 35px;
  color: #fff;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 700;
  background-color: #000;
  cursor: pointer;
`;

const PostImage = styled.div``;

const UserPostImage = styled.img`
  margin-top: 20px;
  width: 100%;
`;

const SocialProduct = styled.div`
  height: auto;
`;

const ProductTitle = styled.div`
  height: auto;
  margin: 12px 0;
`;

const ProductTitleText = styled.span`
  font-size: 17px;
`;

const TextStrong = styled.span`
  font-weight: 700;
`;

const ProductList = styled.div`
  margin-bottom: 10px;
`;

const ProductItem = styled.div`
  width: 130px;
  cursor: pointer;
`;

const ProductImage = styled.img`
  width: 130px;
  border-radius: 10px;
`;

const ProductName = styled.p`
  display: -webkit-box;
  overflow: hidden;
  margin: 8px 0;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 13px;
`;

const ProductPrice = styled.p`
  margin-bottom: 15px;
  font-size: 14px;
  font-weight: 700;
`;

const SocialContent = styled.div`
  ${flexBox('space-between', 'center', '')}
  width: 100%;
`;

const SocialLikeBox = styled.div`
  ${flexBox('', 'center', '')}
  width: auto;
`;

const SocialLikedButton = styled.button`
  padding: 0;
  border: none;
  background-color: #fff;
  cursor: pointer;

  & .like * {
    color: red;
  }
  & .unlike * {
    color: lightgray;
  }
`;

const SocialLikeButtonText = styled.span`
  margin-left: 5px;
  font-size: 14px;
`;

const ShareButton = styled.button`
  border: none;
  background-color: #fff;
  cursor: pointer;
  & .share * {
    color: #5a5959;
  }
`;

const SocialText = styled.p`
  margin-top: 30px;
  margin-bottom: 80px;
  font-size: 15px;
`;
