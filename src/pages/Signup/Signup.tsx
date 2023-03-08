import React from 'react';
import styled from 'styled-components';
import { flexBox } from '../../styles/mixin';
import NaverLogin from './NaverLogin/Naverlogin';

const API_KEY = process.env.REACT_APP_API_KEY;
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
const KAKAO_TOKEN = `https://kauth.kakao.com/oauth/authorize?client_id=${API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

const handleKakaoLogin = () => {
  window.location.href = KAKAO_TOKEN;
};

const Signup = () => {
  return (
    <BackGround>
      <Container>
        <SignupBox>
          <Title
            src="https://cdn.discordapp.com/attachments/1060384508286877719/1060400007280328734/471c10113c173401.png"
            alt="Logo"
          />
          <KakaoButton onClick={handleKakaoLogin}>
            <img
              src="https://dffoxz5he03rp.cloudfront.net/icons/kakaotalk-logo.svg"
              alt="icon"
            />
            <KakaoButtonText>카카오로 계속하기</KakaoButtonText>
          </KakaoButton>
          <NaverLogin />
        </SignupBox>
      </Container>
    </BackGround>
  );
};

export default Signup;

const BackGround = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fafafa;
`;

const Container = styled.div`
  ${flexBox('center', '', '')}
  width: 100%;
  height: auto;
  margin-top: 50px;
`;

const SignupBox = styled.div`
  ${flexBox('', 'center', 'column')}
  width: 490px;
  margin-top: 100px;
  margin-bottom: 90px;
  padding: 30px 0 60px;
  border: 1px solid #ececec;
  border-radius: 10px;
  box-shadow: 0 4px 10px 0 rgb(0 0 0 / 10%);
  background-color: #fff;
`;

const Title = styled.img`
  width: 300px;
`;

const KakaoButton = styled.a`
  ${flexBox('center', 'center', '')}
  margin: 20px 0;
  padding: 15px 0;
  border: none;
  border-radius: 5px;
  width: 350px;
  background-color: rgb(247, 227, 23);
  cursor: pointer;
`;

const KakaoButtonText = styled.span`
  margin-left: 5px;
  font-size: 15px;
  font-weight: 700;
`;
