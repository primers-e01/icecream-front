import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const NaverLogin = ({ setUserInfo }: any) => {
  const naverRef: any = useRef();
  const { naver }: any = window;
  const navigate = useNavigate();

  const NAVER_CLIENT_ID = 'RBJKVVvyEfHCwpkGh8eo';
  const NAVER_CALLBACK_URL = 'http://localhost:3000/naverlogin';

  const initializeNaverLogin = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: NAVER_CLIENT_ID,
      callbackUrl: NAVER_CALLBACK_URL,
      isPopup: false,
      loginButton: { color: 'green', type: 3, height: 48 },
      callbackHandle: true,
    });
    naverLogin.init();
    naverLogin.getLoginStatus(async function (status: any) {
      if (status) {
        // 아래처럼 선택하여 추출이 가능하고,
        const userid = naverLogin.user.getEmail();
        const username = naverLogin.user.getName();
        // 정보 전체를 아래처럼 state 에 저장하여 추출하여 사용가능하다.
        // setUserInfo(naverLogin.user)
      }
    });
    // 요기!
  };

  const userAccessToken = () => {
    window.location.href.includes('access_token') && getToken();
  };

  const getToken = () => {
    const token = window.location.href.split('=')[1].split('&')[0];
    localStorage.setItem('access_token', token);
    navigate('/');
  };

  useEffect(() => {
    initializeNaverLogin();
    userAccessToken();
  }, []);

  const handleNaverLogin = () => {
    naverRef.current.children[0].click();
  };

  return (
    <>
      <NaverIdLogin ref={naverRef} id="naverIdLogin" />
      <NaverLoginBtn onClick={handleNaverLogin}>
        <NaverIcon alt="navericon" src="/images/naverIcon.png" />
        <NaverLoginTitle>네이버로 계속하기</NaverLoginTitle>
      </NaverLoginBtn>
    </>
  );
};
export default NaverLogin;

const NaverIdLogin = styled.div`
  display: none;
`;

const NaverLoginBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 48px;
  background-color: #03c75a;
  border-radius: 6px;
  border: transparent;
  cursor: pointer;
`;

const NaverIcon = styled.img`
  width: 30px;
  height: 30px;
`;

const NaverLoginTitle = styled.span`
  color: #ffffff;
  font-weight: 700;
  font-size: 15px;
  line-height: 24px;
`;
