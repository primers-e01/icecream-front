const BASE_URL = 'http://127.0.0.1:8000';

const API = {
  products: `${BASE_URL}/products`,
  buyBid: `${BASE_URL}/orders/addbuybid`,
  buyNow: `${BASE_URL}/orders/buy`,
  sellBid: `${BASE_URL}/orders/addsellbid`,
  sellNow: `${BASE_URL}/orders/sell`,
  style: `${BASE_URL}/posts/main`,
  styleDetail: `${BASE_URL}/posts/details`,
  naverLogin: `${BASE_URL}/users/login/naver`,
  kakaoLogin: `${BASE_URL}/users/login/kakao`,
};

export { API };
