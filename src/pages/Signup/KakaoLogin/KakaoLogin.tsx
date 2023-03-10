import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { API } from 'src/config/config';

const KakaoLogin = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = new URLSearchParams(document.location.search);
  const code: string | null = params.get('code');
  const navigate = useNavigate();

  setSearchParams(code || '');

  useEffect(() => {
    axios
      .post(`${API.kakaoLogin}?${String(searchParams)}`, {
        headers: { Accept: 'application / json' },
      })
      .then(response => {
        localStorage.setItem('accessToken', response.data.accessToken);
        navigate('/');
      })
      .catch(
        error =>
          error.message === 'Network Error' &&
          alert('백엔드 서버가 꺼져있습니다')
      );
  }, []);

  return <div>로그인중입니다.</div>;
};

export default KakaoLogin;
