const BASE_URL = 'http://10.58.52.142:8000';

const API = {
  products: `${BASE_URL}/products`,
  buyBid: `${BASE_URL}/orders/addbuybid`,
  buyNow: `${BASE_URL}/orders/buy`,
  sellBid: `${BASE_URL}/orders/addsellbid`,
  sellNow: `${BASE_URL}/orders/sell`,
  login: `${BASE_URL}/users/login`,
  style: `${BASE_URL}/posts/main`,
  styleDetail: `${BASE_URL}/posts/details`,
};

export { API };
