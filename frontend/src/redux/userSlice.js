// userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUserData = createAsyncThunk('user/fetchUserData', async () => {
  const response = await axios.get('http://localhost:3000/user');
  return response.data;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    profile: {
      name: '',
      profilePicture: '',
      points: {
        today: 0,
        total: 0,
      },
    },
    status: 'idle',
    error: null,
  },
  reducers: {
    redeemPoints: (state) => {
      if (state.profile.points.total >= 10) {
        state.profile.points.total -= 10;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.profile = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { redeemPoints } = userSlice.actions;
export default userSlice.reducer;
