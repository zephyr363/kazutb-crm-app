import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./base";
import type { IUser, UserLoginProps } from "../types";

export const authApi = createApi({
    reducerPath: "authApi", 
    baseQuery,
    endpoints: builder => ({
        login: builder.mutation<IUser, UserLoginProps>({
            query: (body) => ({
                url: "/v1/sessions/login",
                method: "POST",
                body,
            })
        }),
        logout: builder.mutation({
            query: () => ({
                url: "/v1/sessions/logout",
                method: "DELETE"
            })
        })
    })
})

export const { 
    useLoginMutation,
    useLogoutMutation
} = authApi