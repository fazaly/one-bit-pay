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
                url: `/user/${email}`,
                headers: {
                    authorization: `Bearer ${localStorage.getItem('userAccessToken')}`
                },
            }),
            providesTags: ["userDetails"],
        }),
        getTransactionHistory: builder.query({
            query: (email) => ({
                url: `/transactionSend/${email}`,
                headers: {
                    authorization: `Bearer ${localStorage.getItem('userAccessToken')}`
                },
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
                headers: {
                    authorization: `Bearer ${localStorage.getItem('userAccessToken')}`
                },
                method: "PATCH"
            }),
            invalidatesTags: ["users"],
        }),
        sendMoney: builder.mutation({
            query: (sendMoneyInfo) => ({
                url: `/sendMoney`,
                method: "PUT",
                headers: {
                    authorization: `Bearer ${localStorage.getItem('userAccessToken')}`
                },
                body: sendMoneyInfo
            }),
            invalidatesTags: ["userDetails", "DonationInistitute"],

        }),
        getRechargeHistory: builder.query({
            query: (email) => ({
                url: `/recharge/${email}`,
                headers: {
                    authorization: `Bearer ${localStorage.getItem('userAccessToken')}`
                },
            }),
            providesTags: ["users"],
        }),
        postRechargeData: builder.mutation({
            query: (data) => ({
                url: "/mobile/recharge",
                method: "POST",
                headers: {
                    authorization: `Bearer ${localStorage.getItem('userAccessToken')}`
                },
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
                headers: {
                    authorization: `Bearer ${localStorage.getItem('userAccessToken')}`
                },
                body: data,
            }),
            invalidatesTags: ["userDetails"]
        }),
        applyForAgent: builder.mutation({
            query: (data) => ({
                url: `/agents/request`,
                method: "POST",
                headers: {
                    authorization: `Bearer ${localStorage.getItem('userAccessToken')}`
                },
                body: data,
            })
        }),
        updateUserProfile: builder.mutation({
            query: (userData) => ({
                url: `/userUpdate`,
                method: "PUT",
                headers: {
                    authorization: `Bearer ${localStorage.getItem('userAccessToken')}`
                },
                body: userData,
            }),
            invalidatesTags: ["userDetails"]
        }),
        postB2b: builder.mutation({
            query: (data) => ({
                url: `/agent/b2b`,
                method: "POST",
                headers: {
                    authorization: `Bearer ${localStorage.getItem('userAccessToken')}`
                },
                body: data,
            }),
            invalidatesTags: ["Users", "userDetails"],
        }),
        deletUser: builder.mutation({
            query: (id) => ({
                url: `/users/${id}`,
                method: "DELETE",
                headers: {
                    authorization: `Bearer ${localStorage.getItem('userAccessToken')}`
                },
            }),
            invalidatesTags: ["users"],
        }),
        getAgentRequest: builder.query({
            query: () => ({
                url: "/agents/request",
                headers: {
                    authorization: `Bearer ${localStorage.getItem('userAccessToken')}`
                },
            }),
            providesTags: ["agentRequest"]
        }),
        makeAgent: builder.mutation({
            query: (id) => ({
                url: `/users/agent/${id}`,
                method: "PATCH",
                headers: {
                    authorization: `Bearer ${localStorage.getItem('userAccessToken')}`
                },
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
                headers: {
                    authorization: `Bearer ${localStorage.getItem('userAccessToken')}`
                },
                body: data
            }),
            invalidatesTags: ["userDetails"]
        }),
        getLoanRequestList: builder.query({
            query: () => ({
                url: "/loanRequestList",
                headers: {
                    authorization: `Bearer ${localStorage.getItem('userAccessToken')}`
                },
            }),
            providesTags: ["loanRequestList"],
        }),
        withdraw: builder.mutation({
            query: (withdrawInfo) => ({
                url: `/withdraw`,
                method: "PUT",
                headers: {
                    authorization: `Bearer ${localStorage.getItem('userAccessToken')}`
                },
                body: withdrawInfo
            }),
            invalidatesTags: ["userDetails",],
        }),
        deleteLoanRequest: builder.mutation({
            query: (id) => ({
                url: `/loanRequestList/${id}`,
                method: "DELETE",
                headers: {
                    authorization: `Bearer ${localStorage.getItem('userAccessToken')}`
                },
            }),
            invalidatesTags: ["loanRequestList"],
        }),
        applyForLoan: builder.mutation({
            query: (loanApplicantData) => ({
                url: `/loanApplicantData`,
                method: "POST",
                headers: {
                    authorization: `Bearer ${localStorage.getItem('userAccessToken')}`
                },
                body: loanApplicantData
            }),
            invalidatesTags: ["loanRequestList"],
        }),
        approveLoan: builder.mutation({
            query: (loanInfo) => ({
                url: `/approveLoanRequest`,
                method: "PUT",
                headers: {
                    authorization: `Bearer ${localStorage.getItem('userAccessToken')}`
                },
                body: loanInfo
            }),
            invalidatesTags: ["loanRequestList"],
        }),
        getNotifications: builder.query({
            query: (email) => ({
                url: `/notification/${email}`,
            })
        }),
        agentHistory: builder.query({
            query: (email) => ({
                url: `/agent/history/${email}`,
                headers: {
                    authorization: `Bearer ${localStorage.getItem('userAccessToken')}`
                },
            }),
        }),
        earnFromNews: builder.mutation({
            query: (data) => ({
                url: "/news/earn",
                method: "PUT",
                body: data
            }),
            invalidatesTags: ["userDetails"]
        })
    })
});


export const { useGetUserDetailsQuery, useAddUserMutation, useMakeAdminMutation, useGetUserLoggedinDetailsQuery, useSendMoneyMutation, useGetTransactionHistoryQuery, useGetRechargeHistoryQuery, usePostRechargeDataMutation, useGetUsersRoleQuery, usePostCashInMutation, useApplyForAgentMutation, useDeletUserMutation, useGetAgentRequestQuery, useMakeAgentMutation, useUpdateUserProfileMutation, usePostB2bMutation, useBillCategoriesQuery, useBillCategoryQuery, useGetDonationInistituteQuery, usePayBillMutation, useGetLoanRequestListQuery, useWithdrawMutation, useDeleteLoanRequestMutation, useApproveLoanMutation, useApplyForLoanMutation, useAgentHistoryQuery, useEarnFromNewsMutation } = userDetailsApi

