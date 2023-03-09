import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addSyntheticLeadingComment } from 'typescript';
import { ProductDataRoot } from '../types';

const initialState: ProductDataRoot = {
  productData: undefined,
  tradeAll: [],
  tradeLimit: [],
  chartData: [],
};

const ProductSlice = createSlice({
  name: 'ProductSlice',
  initialState,
  reducers: {
    saveProductData: (state, action: PayloadAction<ProductDataRoot>) => {
      // Object.assign(state, action.payload);
      return action.payload;
    },
  },
});

export default ProductSlice.reducer;
export const { saveProductData } = ProductSlice.actions;
