import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userDetailsApi = createApi({
    reducerPath: "userDetailsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `https://one-bit-pay-server.vercel.app`,
        // baseUrl: `http://localhost:5000`
    }),
    tagTypes: ["users", "userDetails"],
    endpoints: (builder) => ({
        getUserDetails: builder.query({
            query: () => ({
                url: "/users"
            }),
            providesTags: ["users"],
        }),
        getAreNormalUser: builder.query({
            query: (email) => ({
                url: `/user/normaluser/${email}`
            }),
            providesTags: ["Users"],
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
            invalidatesTags: ["userDetails", "DonationInistitute"],

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
            }),
            invalidatesTags: ["userDetails"]
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
            invalidatesTags: ["Users", "userDetails"],
        }),
        deletUser: builder.mutation({
            query: (id) => ({
                url: `/users/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["users"],
        }),
        getAgentRequest: builder.query({
            query: () => ({
                url: "/agents/request"
            }),
            providesTags: ["agentRequest"]
        }),
        makeAgent: builder.mutation({
            query: (id) => ({
                url: `/users/agent/${id}`,
                method: "PATCH"
            }),
            invalidatesTags: ["agentRequest"],
        }),
        billCategory: builder.query({
            query: (category_id) => ({
                url: `/allCompanies/${category_id}`,
            })
        }),
        billCategories: builder.query({
            query: () => ({
                url: `/billCategory`,
            })
        }),
        getDonationInistitute: builder.query({
            query: () => ({
                url: "/donations"
            }),
            providesTags: ["DonationInistitute"]
        }),

        payBill: builder.mutation({
            query: (data) => ({
                url: "/billing",
                method: "PUT",
                body: data
            }),
        }),
        getLoanRequestList: builder.query({
            query: () => ({
                url: "/loanRequestList"
            }),
            providesTags: ["loanRequestList"],
        }),
        withdraw: builder.mutation({
            query: (withdrawInfo) => ({
                url: `/withdraw`,
                method: "PUT",
                body: withdrawInfo
            }),
            invalidatesTags: ["userDetails", "DonationInistitute"],

        }),
        getNotifications: builder.query({
            query: (email) => ({
                url:`/notification/${email}`,
            })
        })


    })
});


export const { useGetUserDetailsQuery, useAddUserMutation, useMakeAdminMutation, useGetUserLoggedinDetailsQuery, useSendMoneyMutation, useGetTransactionHistoryQuery, useGetRechargeHistoryQuery, usePostRechargeDataMutation, useGetUsersRoleQuery, usePostCashInMutation, useApplyForAgentMutation, useDeletUserMutation, useGetAgentRequestQuery, useMakeAgentMutation, useUpdateUserProfileMutation, usePostB2bMutation, useBillCategoriesQuery, useBillCategoryQuery, useGetDonationInistituteQuery, usePayBillMutation, useGetLoanRequestListQuery, useWithdrawMutation , useGetNotificationsQuery} = userDetailsApi

