import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Detail from './pages/Detail/Detail';
import Main from './pages/Main/Main';
import Mypage from './pages/Mypage/Mypage';
import Shop from './pages/Shop/Shop';
import Signup from './pages/Signup/Signup';
import KakaoLogin from './pages/KakaoLogin/KakaoLogin';
import SellSelect from './pages/BuySell/SellSelect';
import BuySelect from './pages/BuySell/BuySelect';
import Sell from './pages/BuySell/Sell';
import Buy from './pages/BuySell/Buy';
import NaverLogin from './pages/NaverLogin/Naverlogin';
import NotFound from './pages/404/NotFound';

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/detail/:productId" element={<Detail />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/kakaoLogin" element={<KakaoLogin />} />
        <Route path="/sell/select" element={<SellSelect />} />
        <Route path="/buy/select" element={<BuySelect />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/naverlogin" element={<NaverLogin />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
