import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: JSON.parse(localStorage.getItem("userInfo")),
  isAuthenticated: false
}

const loginSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    login(state, action) {
     // ✅ This "mutating" code is okay inside of createSlice!
       state.user=action.payload,
      state.isAuthenticated=true
     
    },
    logout(state,action){
        state.user={},
        state.isAuthenticated=false
    }
    },
    todosLoading(state, action) {
      return {
        ...state,
        status: 'loading'
      }
    }
  }
})

export const { todoAdded, todoToggled, todosLoading } = loginSlice.actions

export default loginSlice.reducer