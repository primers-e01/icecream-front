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
import SellSelect from './pages/BuySell/SellSelect';
import BuySelect from './pages/BuySell/BuySelect';
import Sell from './pages/BuySell/Sell';
import Buy from './pages/BuySell/Buy';

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
        <Route path="/sell/select" element={<SellSelect />} />
        <Route path="/buy/select" element={<BuySelect />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/buy" element={<Buy />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
