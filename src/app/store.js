import { configureStore } from "@reduxjs/toolkit";
import { userDetailsApi } from "../features/api/apiSlice";
import authSlice from "../features/api/authSlice";
import currentUserSlice from "../features/api/courrentUserSlice";
import userTypeSlice from "../features/api/userTypeSlice";

const store = configureStore({
        reducer: {
                [userDetailsApi.reducerPath]: userDetailsApi.reducer,
                currentUser: currentUserSlice,
                auth: authSlice,
        },

        middleware: (getDefaultMiddleware) =>
                getDefaultMiddleware().concat(userDetailsApi.middleware),
});

export default store
