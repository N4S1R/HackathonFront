import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "../../store"
const userState = (state: RootState) =>  state.userReducer
export const userSelector = createSelector([userState], (userState) => userState)
