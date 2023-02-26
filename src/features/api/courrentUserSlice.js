import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},
    category: []
}

const currentUserSlice = createSlice({
    name: "currentUser",
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.user = action.payload
        },
        setCategory_id: (state, action) =>  {
            state.category = action.payload
        }
    }
});
export const { setCurrentUser, setCategory_id } = currentUserSlice.actions;

export default currentUserSlice.reducer;