import { createSlice } from "@reduxjs/toolkit";


const initialState = {
      email: null,
      token: null,
      id: null
}

const userSlice = createSlice({
      name: "user",
      initialState,
      reducers: {
            setUser(state, action) {
                  state.email = action.payload.email
                  state.token = action.payload.token
                  state.id = action.payload.id
                  localStorage.setItem("user", JSON.stringify(action.payload))
            },
            removeUser(state) {
                  state.email = null
                  state.token = null
                  state.id = null
                  localStorage.removeItem("user")
            }
      }
})

export const userReducer = userSlice.reducer
export const {setUser, removeUser} = userSlice.actions