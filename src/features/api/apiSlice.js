import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userDetailsApi = createApi({
    reducerPath: "userDetailsApi",
    baseQuery: fetchBaseQuery({
        // baseUrl: `https://one-bit-pay-server.vercel.app`,
        baseUrl: `http://localhost:5000`
    }),
    tagTypes: ["users", "userDetails"],
    endpoints: (builder) => ({
        getUserDetails: builder.query({
            query: () => ({
                url: "/users"
            }),
            providesTags: ["users"],
        }),
        getUserLoggedinDetails: builder.query({
            query: (email) => ({
                url: `/user/${email}`
            }),
            providesTags: ["userDetails"],
        }),
        getTransactionHistory: builder.query({
            query: (email) => ({
                url: `/transactionSend/${email}`
            }),
            providesTags: ["userDetails"],
        }),
        addUser: builder.mutation({
            query: (data) => ({
                url: "/addUser",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["users"],
        }),
        makeAdmin: builder.mutation({
            query: (id) => ({
                url: `/users/admin/${id}`,
                method: "PATCH"
            }),
            invalidatesTags: ["users"],
        }),
        sendMoney: builder.mutation({
            query: (sendMoneyInfo) => ({
                url: `/sendMoney`,
                method: "PUT",
                body: sendMoneyInfo
            }),
            invalidatesTags: ["userDetails"],

        }),
        getRechargeHistory: builder.query({
            query: (email) => ({
                url: `/recharge/${email}`
            }),
            providesTags: ["users"],
        }),
        postRechargeData: builder.mutation({
            query: (data) => ({
                url: "/mobile/recharge",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["users", "userDetails"]
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
            query: (userData) => ({
                url: `/userUpdate`,
                method: "PUT",
                body: userData,
            }),
            invalidatesTags: ["userDetails"]
        }),
        postB2b: builder.mutation({
            query: (data) => ({
                url: `/agent/b2b`,
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["userDetails"]
        }),
    })
});

export const { useGetUserDetailsQuery, useAddUserMutation, useMakeAdminMutation, useGetUserLoggedinDetailsQuery, useSendMoneyMutation, useGetTransactionHistoryQuery, useGetRechargeHistoryQuery, usePostRechargeDataMutation, useGetUsersRoleQuery, usePostCashInMutation, useApplyForAgentMutation, usePostB2bMutation, useUpdateUserProfileMutation } = userDetailsApi