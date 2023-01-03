import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyleCard = props => {
  const {
    profile_image_url,
    nickName,
    post_image_url,
    products,
    likes,
    feed_text,
  } = props;

  return (
    <>
      <UserInfoState>
        <UserInfo>
          <UserProfileImage src={profile_image_url} />
          <UserId>{nickName}</UserId>
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
          <ProductImage src={products?.[0]?.thumbnail_image_url} />
        </ProductItem>
        <ProductItem>
          <ProductName>{products?.[0]?.en_name}</ProductName>
        </ProductItem>
        <ProductItem>
          <ProductPrice>{products?.[0]?.price.toLocaleString()}원</ProductPrice>
        </ProductItem>
      </ProductList>
      <SocialContent>
        <SocialLikeBox>
          <SocialLikeButton>
            <FontAwesomeIcon
              icon="fa-regular fa-face-smile"
              size="2x"
              color="gray"
            />
          </SocialLikeButton>
          <SocialLikeButtonText>
            공감<TextStrong>{likes}</TextStrong>개
          </SocialLikeButtonText>
        </SocialLikeBox>
        <ShareButton>
          <FontAwesomeIcon
            icon="fa-regular fa-share-from-square"
            size="2x"
            color="gray"
          />
        </ShareButton>
      </SocialContent>
      <SocialText>{feed_text}</SocialText>
    </>
  );
};

export default StyleCard;

const UserInfoState = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
`;

const UserProfileImage = styled.img`
  width: 45px;
  border-radius: 50%;
`;

const UserId = styled.span`
  margin-left: 10px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
`;

const FollowButton = styled.button`
  width: 100px;
  height: 35px;
  color: white;
  border-radius: 10px;
  font-size: 15px;
  font-weight: bold;
  background-color: black;
  cursor: pointer;
`;

const PostImage = styled.div`
  width: 100%;
`;

const UserPostImage = styled.img`
  margin-top: 20px;
  width: 100%;
`;

const SocialProduct = styled.div`
  width: 100%;
  height: auto;
`;

const ProductTitle = styled.div`
  width: 100%;
  height: auto;
  margin: 12px 0;
`;

const ProductTitleText = styled.span`
  font-size: 17px;
`;

const TextStrong = styled.span`
  font-weight: bold;
`;

const ProductList = styled.div`
  margin-bottom: 10px;
  width: 100%;
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
  font-weight: bold;
`;

const SocialContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const SocialLikeBox = styled.div`
  display: flex;
  align-items: center;
  width: auto;
`;

const SocialLikeButton = styled.button`
  padding: 0;
  border: none;
  background-color: white;
  cursor: pointer;
`;

const SocialLikeButtonText = styled.span`
  margin-left: 5px;
  font-size: 14px;
`;

const ShareButton = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
`;

const SocialText = styled.p`
  margin-top: 30px;
  margin-bottom: 80px;
  font-size: 15px;
`;
