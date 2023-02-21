import { createSlice } from '@reduxjs/toolkit';

interface ClickedSlice {
  isClicked: boolean;
}

const initialState = {
  isClicked: false,
} as ClickedSlice;

const ClickedSlice = createSlice({
  name: 'ClickedSlice',
  initialState,
  reducers: {
    toggle: state => {
      state.isClicked = !state.isClicked;
    },
  },
});

export default ClickedSlice.reducer;
export const ClickedSliceActions = ClickedSlice.actions;
