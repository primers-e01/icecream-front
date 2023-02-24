import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {
    '230': '-',
    '240': '-',
    '250': '-',
    '260': '-',
    '270': '-',
    '280': '-',
  },
};

const ProductSlice = createSlice({
  name: 'ProductSlice',
  initialState,
  reducers: {
    productSave: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default ProductSlice.reducer;
export const ProductAction = ProductSlice.actions;
