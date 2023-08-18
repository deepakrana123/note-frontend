import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const baseURL="https://note-app-61xq.onrender.com";

const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null
const initialState = {
  isLoading: false,
  userInfo: null,
  userToken,
  error: null,
  success: false,

}




export const registerUser = createAsyncThunk(
  'auth/register',
  async ({ firstName, email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      await axios.post(
        `${baseURL}/api/user/register`,
        { firstName, email, password },
        config
      )
    } catch (error) {
    // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

export const userLogin = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const { data } = await axios.post(
        `${baseURL}/api/user/login`,
        { email, password },
        config
      )
      // store user's token in local storage
      localStorage.setItem('userToken', data.userToken)
      return data
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true
      state.error=null
    })
    builder.addCase(registerUser.fulfilled, (state, action) => {
      console.log(action.payload,"Action.payload")
      state.isLoading = false
      state.status=true
      // state.user = action.payload
    })
    builder.addCase(registerUser.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
    builder.addCase(userLogin.pending, (state) => {
      state.isLoading = true
      state.error=null
    })
    builder.addCase(userLogin.fulfilled, (state, action) => {
      console.log(action.payload,"Action.payload")
      state.isLoading = false
      state.userInfo = action.payload
      state.userToken = action.payload.userToken
      // state.user = action.payload
    })
    builder.addCase(userLogin.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
  },
})

export default authSlice.reducer