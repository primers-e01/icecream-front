import React from 'react';
import styled from 'styled-components';

const API_KEY = process.env.REACT_APP_API_KEY;
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
const KAKAO_TOKEN = `https://kauth.kakao.com/oauth/authorize?client_id=${API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

const handleLogin = () => {
  window.location.href = KAKAO_TOKEN;
};

const Signup = () => {
  return (
    <Container>
      <SignupBox>
        <Title>ICECREAM</Title>
        <SubTitle>한정판 거래의 FLEX</SubTitle>
        <KakaoButton onClick={handleLogin}>
          <img
            src="https://dffoxz5he03rp.cloudfront.net/icons/kakaotalk-logo.svg"
            alt="icon"
          />
          <KakaoButtonText>카카오로 계속하기</KakaoButtonText>
        </KakaoButton>
        <AuthButtons>
          <AuthButton>
            <AuthImg
              src="https://dffoxz5he03rp.cloudfront.net/icons/fb-gray-logo.svg"
              alt="facebookIcon"
            />
            <AuthText>페이스북</AuthText>
          </AuthButton>
          <AuthButton>
            <AuthImg
              src="https://dffoxz5he03rp.cloudfront.net/icons/naver-gray-logo.svg"
              alt="NaverIcon"
            />
            <AuthText>네이버</AuthText>
          </AuthButton>
          <AuthButton>
            <AuthImg
              src="https://dffoxz5he03rp.cloudfront.net/icons/email-gray-logo.svg"
              alt="EmailIcon"
            />
            <AuthText>이메일</AuthText>
          </AuthButton>
        </AuthButtons>
      </SignupBox>
    </Container>
  );
};

export default Signup;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  margin: 50px 0;
`;

const SignupBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 450px;
  height: auto;
  margin: 50px 0;
  border: 1px solid #e4e3e3;
  border-radius: 5px;
`;

const Title = styled.h1`
  margin-top: 50px;
  font-size: 30px;
`;

const SubTitle = styled.h1`
  margin: 30px 0;
  font-size: 30px;
`;

const KakaoButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  padding: 15px 0;
  border: none;
  border-radius: 5px;
  width: 350px;
  height: auto;
  background-color: rgb(247, 227, 23);
  &:hover {
    cursor: pointer;
  }
`;

const KakaoButtonText = styled.span`
  margin-left: 5px;
  font-size: 15px;
  font-weight: bold;
`;

const AuthButtons = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0;
  width: 100%;
`;

const AuthButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  margin: 0 10px;
  background-color: white;
  &:hover {
    cursor: pointer;
  }
`;

const AuthImg = styled.img`
  width: auto;
`;

const AuthText = styled.span`
  margin-left: 10px;
  padding: 10px 0;
  font-size: 14px;
  font-weight: bold;
  color: #b6b6b6;
`;
