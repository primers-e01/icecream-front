import { createSlice } from '@reduxjs/toolkit';

interface ClickedSliceType {
  isClicked: boolean;
}

const initialState = {
  isClicked: false,
} as ClickedSliceType;

const ClickedSlice = createSlice({
  name: 'ClickedSlice',
  initialState,
  reducers: {
    toggle: state => {
      state.isClicked = true;
    },
  },
});

export default ClickedSlice.reducer;
export const ClickedSliceActions = ClickedSlice.actions;
