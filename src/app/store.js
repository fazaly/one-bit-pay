import { configureStore } from "@reduxjs/toolkit";
import { userDetailsApi } from "../features/api/apiSlice";
import authSlice from "../features/api/authSlice";
import currentUserSlice from "../features/api/courrentUserSlice";

const store = configureStore({
    reducer: {
        [userDetailsApi.reducerPath]: userDetailsApi.reducer,
        // currentUser: currentUserSlice,
        auth: authSlice,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userDetailsApi.middleware),
});

export default store
