import React from 'react';
import styled from 'styled-components';
import { flexBox } from '../../styles/mixin';
import NaverLogin from '../NaverLogin/Naverlogin';

const API_KEY = process.env.REACT_APP_API_KEY;
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
const KAKAO_TOKEN = `https://kauth.kakao.com/oauth/authorize?client_id=${API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

// const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
// const CALLBACK_URL = process.env.REACT_APP_REDIRECT_URI;
// const NAVER_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${CLIENT_ID}&state=STATE_STRING&redirect_uri=${CALLBACK_URL}`;
const handleKakaoLogin = () => {
  window.location.href = KAKAO_TOKEN;
};

// const handleNaverLogin = () => {
//   window.location.href = NAVER_URL;
// };

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
          <AuthButtons>
            {/* TODO: map 돌릴수있을듯 */}
            <AuthButton>
              <FacebookImg
                src="https://media.discordapp.net/attachments/1060384508286877719/1060384682279190598/facebookIcon.png"
                alt="facebookIcon"
              />
              <AuthText>페이스북</AuthText>
            </AuthButton>

            {/* <AuthButton>
              <NaverImg
                src="https://cdn.discordapp.com/attachments/1060384508286877719/1060384683151605871/naverIcon.png"
                alt="NaverIcon"
              />
              <AuthText>네이버</AuthText>
            </AuthButton> */}

            <AuthButton>
              <GoogleImg
                src="https://cdn.discordapp.com/attachments/1060384508286877719/1060384682736361522/googleIcon.png"
                alt="GoogleIcon"
              />
              <AuthText>이메일</AuthText>
            </AuthButton>
          </AuthButtons>
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
  margin-top: 140px;
  margin-bottom: 90px;
  padding: 30px 0;
  border: 1px solid #ececec;
  border-radius: 10px;
  box-shadow: 0 4px 10px 0 rgb(0 0 0 / 10%);
  background-color: #fff;
`;

const Title = styled.img`
  width: 300px;
  margin: 18px 0;
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

const AuthButtons = styled.div`
  ${flexBox('center', '', '')}
  margin: 30px 0;
  width: 100%;
`;

const AuthButton = styled.button`
  ${flexBox('', 'center', '')}
  border: none;
  margin: 0 10px;
  background-color: #fff;
  cursor: pointer;
`;

const FacebookImg = styled.img`
  width: 27px;
`;

const GoogleImg = styled.img`
  width: 28px;
`;

const AuthText = styled.span`
  margin-left: 5px;
  padding: 10px 0;
  font-size: 14px;
  font-weight: 700;
  color: #b6b6b6;
`;
