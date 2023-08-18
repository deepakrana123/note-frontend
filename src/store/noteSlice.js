import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
  note: [],
  isLoading: false,
  error: null,
}


const API_ENDPOINT = 'YOUR_API_ENDPOINT';

// Replace 'YOUR_BEARER_TOKEN' with your actual bearer token
// const BEARER_TOKEN = 'YOUR_BEARER_TOKEN';

// Async thunk to make a POST request with Bearer token
export const createCreateAsync = createAsyncThunk(
  'posts/createPost',
  async (postData,BEARER_TOKEN, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_ENDPOINT}/posts`, postData, {
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
          'Content-Type': 'application/json',
        },
      });

      return response.data;
    } catch (error) {
      // You can handle errors and rejections here
      return rejectWithValue(error.response.data);
    }
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    // Your initial state here
  },
  reducers: {
    // Your other reducers here
  },
  extraReducers: (builder) => {
    builder.addCase(createAsyncThunk.pending,(state,action)=>{
      state.isLoading=true
    })
    builder.addCase(createCreateAsync.fulfilled, (state, action) => {
      // Handle the successful response here
      state.isLoading=false
      state.note=action.payload
    });
    builder.addCase(createCreateAsync.rejected, (state, action) => {
      // Handle the rejected or error case here
      state.isLoading=false;
      state.error= action.error.message
    });
  },
});

export default postsSlice.reducer;