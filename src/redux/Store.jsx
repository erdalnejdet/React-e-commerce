import { configureStore } from '@reduxjs/toolkit';
import appSlice from './slices/appSlice';
import productReducer from './slices/productSlice'
import basketReducer from './slices/basketSlice'
export const store = configureStore({
  reducer: {
    app: appSlice,
    product :productReducer,
    basket : basketReducer
  },
})