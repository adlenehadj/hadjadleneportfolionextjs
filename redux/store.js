// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import testimonialsReducer from './slices/testimonialsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    testimonials: testimonialsReducer,
  },
});

export default store;
