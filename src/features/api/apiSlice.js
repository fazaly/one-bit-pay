import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userDetailsApi = createApi({
    reducerPath: "userDetailsApi",
    baseQuery: fetchBaseQuery({
        // baseUrl: `https://one-bit-pay-server.vercel.app`,
        baseUrl: `http://localhost:5000`
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
        getRechargeHistory: builder.query({
            query: (email) => ({
                url: `/recharge/${email}`
            }),
            providesTags: ["Users"],
        }),
        postRechargeData: builder.mutation({
            query: (data) => ({
                url:"/mobile/recharge",
                method: "POST",
                body: data,
            }),
        invalidatesTags: ["Users", "userDetails"]
        }),
        getUsersRole: builder.query({
            query: (email) => ({
                url: `/user/normaluser/${email}`
            })
        }),
        postCashIn: builder.mutation({
            query: (data) => ({
                url: `/agent/cashin`,
                method: "PUT",
                body: data,
            })
        }),
        applyForAgent: builder.mutation({
            query: (data) => ({
                url: `/agents/request`,
                method: "POST",
                body: data,
            })
        }),
        updateUserProfile: builder.mutation({
            query: (email, data) => ({
                url: `/userUpdate/${email}`,
                method: "PUT",
                body: data,
            }),
            invalidatesTags:["userDetails"]
        })
    })
});

export const { useGetUserDetailsQuery, useAddUserMutation, useMakeAdminMutation, useGetUserLoggedinDetailsQuery, useSendMoneyMutation, useGetTransactionHistoryQuery, useGetRechargeHistoryQuery, usePostRechargeDataMutation , useGetUsersRoleQuery, usePostCashInMutation, useApplyForAgentMutation} = userDetailsApi