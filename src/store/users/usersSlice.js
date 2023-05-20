import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  users:[],
  isLoading: false,
  error: undefined,
};

const url = 'https://randomuser.me/api/?results=5';
export const fetchUsers = createAsyncThunk('fetchuser', async (rejectWithValue ) => {
  try {
    const response = await axios(url)
    // const data = await response.json();
    // console.log(data.results);
    // return data.results;
    return response.data.results;
  } catch (error) {
    console.log(error);
    return rejectWithValue(error.message);
  }
});

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled,  (state, action) => {
      state.isLoading = false;
      state.users = action.payload
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = "error loading users";
    });
  },
});

export default usersSlice.reducer;
