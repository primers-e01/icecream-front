import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { API } from 'src/config/config';

const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;
const NAVER_CALLBACK_URL = process.env.REACT_APP_NAVER_CALLBACK_URL;

const NaverLogin = () => {
  const naverRef: any = useRef();
  const { naver }: any = window;
  const navigate = useNavigate();

  const initializeNaverLogin = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: NAVER_CLIENT_ID,
      callbackUrl: NAVER_CALLBACK_URL,
      isPopup: false,
      loginButton: { color: 'green', type: 3, height: 48 },
      callbackHandle: true,
    });
    naverLogin.init();
  };

  const userAccessToken = () => {
    window.location.href.includes('access_token') && getToken();
  };

  const getToken = async () => {
    const token = window.location.href.split('=')[1].split('&')[0];

    const res = await fetch(`${API.login}`, {
      method: 'POST',
      headers: {
        authorization: token,
      },
    });

    const { accessToken } = await res.json();

    if (!accessToken) alert('로그인 실패');

    localStorage.setItem('access_token', accessToken);

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
