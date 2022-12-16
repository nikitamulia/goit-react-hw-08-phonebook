import { createSlice } from '@reduxjs/toolkit';
import operations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false, 
  isRefreshing: false,
};

const authSlice = createSlice({ 
  name: 'auth', 
  initialState,
  extraReducers: builder => {
    builder
      .addCase(operations.register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(operations.logIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(operations.logOut.fulfilled, (state, { payload }) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      
      
      .addCase(operations.fetchCurrentUser.pending, (state, { payload }) => {
        state.isRefreshing = true;
      })
      .addCase(operations.fetchCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(operations.fetchCurrentUser.rejected, (state, { payload }) => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;

