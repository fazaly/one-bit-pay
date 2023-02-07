import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},
}

const currentUserSlice = createSlice({
    name: "currentUser",
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.user = action.payload

        }
    }
});
export const { setCurrentUser } = currentUserSlice.actions;

export default currentUserSlice.reducer;