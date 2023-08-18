import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// const baseURL="https://note-app-61xq.onrender.com";
const baseURL = "http://localhost:2111";

const userToken = localStorage.getItem("userToken")
  ? localStorage.getItem("userToken")
  : null;

const initialState = {
  isLoading: false,
  userInfo: null,
  userToken,
  error: null,
  success: false,
  note:[]
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async (postdata, { rejectWithValue }) => {
    try {
      await axios.post(`${baseURL}/api/user/register`, postdata);
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${baseURL}/api/user/login`, {
        email,
        password,
      });
      // store user's token in local storage
      localStorage.setItem("userToken", data.token);
      return data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const createNote = createAsyncThunk(
  'note/createNote',
  async (postData , { rejectWithValue }) => {
    console(postData)
    try {
      const response = await axios.post(`${baseURL}/api/note/create`, postData, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      return response.data;
    } catch (error) {
      // You can handle errors and rejections here
      return rejectWithValue(error.response.data);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true;
      state.error = null;
      state.success = false;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      console.log(action.payload, "Action.payload", action);
      state.isLoading = false;
      state.success = true;
      // state.user = action.payload
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      console.log(action, "action");
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(userLogin.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      console.log(action.payload, "Action.payload");
      state.isLoading = false;
      state.userInfo = action.payload;
      state.userToken = action.payload.userToken;
      // state.user = action.payload
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
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

export default authSlice.reducer;
