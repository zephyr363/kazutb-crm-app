import { configureStore } from '@reduxjs/toolkit'
import { authApi } from '../services/auth'
import { userApi } from '../services/user'
import authSlice from './slices/authSlice'


export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        auth: authSlice
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware().concat(
            authApi.middleware,
            userApi.middleware
        )
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store