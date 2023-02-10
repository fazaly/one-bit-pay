import { configureStore } from "@reduxjs/toolkit";
import { userDetailsApi } from "../features/api/apiSlice";
import currentUserSlice from "../features/api/courrentUserSlice";
import userTypeSlice from "../features/api/userTypeSlice";

const store = configureStore({
    reducer: {
        [userDetailsApi.reducerPath]: userDetailsApi.reducer,
        currentUser: currentUserSlice,
        userType: userTypeSlice,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userDetailsApi.middleware),
});

export default store
