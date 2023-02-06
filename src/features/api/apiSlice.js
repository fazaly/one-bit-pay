import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userDetailsApi = createApi({
    reducerPath: "userDetailsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `https://one-bit-pay-server.vercel.app`
    }),
    tagTypes: ["Users"],
    endpoints: (builder) => ({
        getUserDetails: builder.query({
            query: () => ({
                url: "/users"
            }),
            providesTags: ["Users"],
        }),
        getUserLoggedinDetails: builder.query({
            query: (email) => ({
                url: `/user/${email}`
            }),
            providesTags: ["UserDetails"],
        }),
        getTransactionHistory: builder.query({
            query: (email) => ({
                url: `/transactionSend/${email}`
            }),
            providesTags: ["UserDetails"],
        }),
        addUser: builder.mutation({
            query: (data) => ({
                url: "/addUser",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["Users"],
        }),
        makeAdmin: builder.mutation({
            query: (id) => ({
                url: `/users/admin/${id}`,
                method: "PATCH"
            }),
            invalidatesTags: ["Users"],
        }),
        sendMoney: builder.mutation({
            query: (sendMoneyInfo) => ({
                url: `/sendMoney`,
                method: "PUT",
                body: sendMoneyInfo
            }),
            invalidatesTags: ["UserDetails"],

        }),

    })
});

export const { useGetUserDetailsQuery, useAddUserMutation, useMakeAdminMutation, useGetUserLoggedinDetailsQuery, useSendMoneyMutation, useGetTransactionHistoryQuery } = userDetailsApi