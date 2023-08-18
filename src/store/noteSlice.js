import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const API_ENDPOINT="http://localhost:2111"

const initialState = {
  note: [],
  isLoading: false,
  error: null,
}


// Replace 'YOUR_BEARER_TOKEN' with your actual bearer token
// const BEARER_TOKEN = 'YOUR_BEARER_TOKEN';

// Async thunk to make a POST request with Bearer token
export const createNote = createAsyncThunk(
  'note/createNote',
  async (postData ,BEARER_TOKEN, { rejectWithValue }) => {
    console(postData,BEARER_TOKEN)
    try {
      const response = await axios.post(`${API_ENDPOINT}/api/note/create`, postData, {
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
        },
      });
      return response.data;
    } catch (error) {
      // You can handle errors and rejections here
      return rejectWithValue(error.response.data);
    }
  }
);
// export const registerUser = createAsyncThunk(
//   "auth/register",
//   async (postdata, { rejectWithValue }) => {
//     try {
//       await axios.post(`${baseURL}/api/user/register`, postdata);
//     } catch (error) {
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message);
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );

const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    // Your other reducers here
  },
  extraReducers: (builder) => {
    builder.addCase(createNote.pending,(state,action)=>{
      state.isLoading=true
    })
    builder.addCase(createNote.fulfilled, (state, action) => {
      // Handle the successful response here
      state.isLoading=false
      state.note=action.payload
    });
    builder.addCase(createNote.rejected, (state, action) => {
      // Handle the rejected or error case here
      state.isLoading=false;
      state.error= action.error.message
    });
  },
});

export default noteSlice.reducer;