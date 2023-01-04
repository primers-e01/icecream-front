const BASE_URL = 'http://10.58.52.168:8000';

const API = {
  products: `${BASE_URL}/products`,
  buyBid: `${BASE_URL}/orders/addbuybid`,
  buyNow: `${BASE_URL}/orders/buy`,
  sellBid: `${BASE_URL}/orders/addsellbid`,
  sellNow: `${BASE_URL}/orders/sell`,
};

export { API };
