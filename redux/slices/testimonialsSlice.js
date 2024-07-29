// redux/slices/testimonialsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  testimonials: [],
};

const testimonialsSlice = createSlice({
  name: 'testimonials',
  initialState,
  reducers: {
    addTestimonial: (state, action) => {
      state.testimonials.push(action.payload);
    },
    removeTestimonial: (state, action) => {
      state.testimonials = state.testimonials.filter(
        (testimonial) => testimonial.id !== action.payload.id
      );
    },
  },
});

export const { addTestimonial, removeTestimonial } = testimonialsSlice.actions;
export default testimonialsSlice.reducer;
