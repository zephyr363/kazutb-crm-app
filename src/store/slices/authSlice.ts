import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IUser } from "../../types";

interface AuthState {
    isAuth: boolean
    user: IUser | null
}

const initialState: AuthState = {
    isAuth: false,
    user: null
}
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        toggleAuth: (state, action: PayloadAction<{ isAuth: boolean, user: IUser | null }>) => {
            state.isAuth = action.payload.isAuth
            state.user = action.payload.user
        },
        setUser: (state, action: PayloadAction<{ user: IUser | null }>) => {
            state.user = action.payload.user
        },
        setAuth: (state, action: PayloadAction<{ isAuth: boolean }>) => {
            state.isAuth = action.payload.isAuth
        }
    }
})

export const {
    toggleAuth,
    setUser,
    setAuth
} = authSlice.actions

export default authSlice.reducer

