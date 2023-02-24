import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import ClickedSlice from './ClickedSlice';
import { api } from './api';
import ProductSlice from './ProductSlice';
const Store = configureStore({
  reducer: {
    ProductSlice: ProductSlice,
    ClickedSlice: ClickedSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default Store;
