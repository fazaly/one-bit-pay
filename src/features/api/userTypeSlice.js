import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cashInUser: "",
    userType: "",
}

const userTypeSlice = createSlice({
    name: "userType",
    initialState,
    reducers: {
        setUserType: (state, action) => {
            state.userType = action.payload

        },
        // setCashInUser: (state, action) => {
        //     state.cashInUser = action.payload

        // },
    }
});
export const { setUserType } = userTypeSlice.actions;

export default userTypeSlice.reducer;