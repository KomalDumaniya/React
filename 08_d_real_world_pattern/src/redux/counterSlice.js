import { createSlice } from '@reduxjs/toolkit';

const ITEMS_PER_PAGE = 5;

const initialState = {
  count: 0,
  history: [],
  page: 1,
  itemsPerPage: ITEMS_PER_PAGE,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
      state.history.unshift(state.count); 
    },
    decrement: (state) => {
      state.count -= 1;
      state.history.unshift(state.count);
    },
    reset: (state) => {
      state.count = 0;
      state.history.unshift(state.count);
    },
    nextPage: (state) => {
      const maxPages = Math.ceil(state.history.length / state.itemsPerPage);
      if (state.page < maxPages) state.page += 1;
    },
    prevPage: (state) => {
      if (state.page > 1) state.page -= 1;
    },
  },
});

export const { increment, decrement, reset, nextPage, prevPage } = counterSlice.actions;
export default counterSlice.reducer;
