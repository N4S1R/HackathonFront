import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { userReducer } from "./reducers/user/userSlice";
import { modalReducer } from "./reducers/Modal/modalSlice";
import { carsApi } from "./reducers/Modal/carsApi/cars";



export const store = configureStore({
      reducer: {
            userReducer,
            modalReducer,
            [carsApi.reducerPath]: carsApi.reducer
      },
      middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: true,
      }).concat(carsApi.middleware),
})




export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector