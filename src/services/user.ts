import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./base";
import type { IUser, UserCreateProps } from "../types";

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery,
    endpoints: builder => ({
        me: builder.query<IUser, void>({
            query: () => ({
                url: "/v1/users/me",
            })
        }),
        create: builder.mutation<IUser, UserCreateProps>({
            query: (body) => ({
                url: "/",
                method: "POST",
                body
            })
        })
    })
})

export const {
    useMeQuery,
    useCreateMutation
} = userApi