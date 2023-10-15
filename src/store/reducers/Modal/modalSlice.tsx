import { createSlice } from "@reduxjs/toolkit";


const initialState = {
      isOpen: false
}

const modalSlice = createSlice({
      name: "modal",
      initialState,
      reducers: {
            modalHandler: (state) => {
                  state.isOpen = !state.isOpen
            }
      }
})

export const modalReducer = modalSlice.reducer
export const {modalHandler} = modalSlice.actions