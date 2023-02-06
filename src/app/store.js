import { configureStore } from "@reduxjs/toolkit";
import { userDetailsApi } from "../features/api/apiSlice";
import currentUserSlice from "../features/api/courrentUserSlice";

const store = configureStore({
    reducer: {
        [userDetailsApi.reducerPath]: userDetailsApi.reducer,
        currentUser: currentUserSlice,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userDetailsApi.middleware),
});

export default store
