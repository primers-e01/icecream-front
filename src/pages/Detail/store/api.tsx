import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { API } from 'src/config/config';

export const api = createApi({
  reducerPath: 'product',
  baseQuery: fetchBaseQuery({
    baseUrl: `http://127.0.0.1:8000`,
  }),
  endpoints: buid => ({
    getProduct: buid.query({
      query: productId => ({ url: `/products/${productId}` }),
    }),
  }),
});
// fetch(`${API.products}/${productId}`);

export const { useGetApiQuery }: any = api;
