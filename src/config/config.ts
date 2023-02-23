const BASE_URL = 'http://127.0.0.1:8000';

const API = {
  products: `${BASE_URL}/products`,
  buyBid: `${BASE_URL}/orders/addbuybid`,
  buyNow: `${BASE_URL}/orders/buy`,
  sellBid: `${BASE_URL}/orders/addsellbid`,
  sellNow: `${BASE_URL}/orders/sell`,
  login: `${BASE_URL}/users/login`,
  style: `${BASE_URL}/posts/main`,
  styleDetail: `${BASE_URL}/posts/details`,
  kakaoLogin: `${BASE_URL}/users/login`,
};

export { API };
