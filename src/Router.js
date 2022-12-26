import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Detail from './pages/Detail/Detail';
import Main from './pages/Main/Main';
import Mypage from './pages/Mypage/Mypage';
import Shop from './pages/Shop/Shop';
import Signup from './pages/Signup/Signup';
import Style from './pages/Style/Style';
import KakaoLogin from './pages/KakaoLogin/KakaoLogin';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/style" element={<Style />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/kakaoLogin" element={<KakaoLogin />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
