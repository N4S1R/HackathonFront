import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "../../store"
const modalState = (state: RootState) =>  state.modalReducer
export const modalSelector = createSelector([modalState], (modalState) => modalState)
