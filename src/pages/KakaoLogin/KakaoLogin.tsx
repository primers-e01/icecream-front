import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { API } from 'src/config/config';

const KakaoLogin = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = new URLSearchParams(document.location.search);
  const code: string | null = params.get('code');
  const navigate = useNavigate();

  setSearchParams(code || '');

  useEffect(() => {
    fetch(`${API.kakaoLogin}?${String(searchParams)}`, {
      method: 'POST',
      headers: { Accept: 'application / json' },
    })
      .then(response => response.json())
      .then(response => {
        localStorage.setItem('accessToken', response.accessToken);
        navigate('/products/main');
      });
  }, []);

  return <div>로그인중입니다.</div>;
};

export default KakaoLogin;
