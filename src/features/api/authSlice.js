import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth"
import app from "../../firebase/firebase.config"

const initialState = {
    email: "",
    isLoading: true,
    isSuccess: false,
    isError: false,
    error: "", 
}

export const auth = getAuth(app);

export const createUser = createAsyncThunk("auth/createUser", async({email, password}) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    return data.user.email;
})

export const loginUser = createAsyncThunk("auth/loginUser", async({email, password}) => {
    const data = await signInWithEmailAndPassword(auth, email, password);
    return data.user.email;
})

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logoutUser: (state) => {
            state.email = "";
        },
        setUser: (state, action) => {
            state.email = action.payload;
            state.isLoading = false;
        }
    },
    extraReducers: (builder) =>  {
        builder.addCase(createUser.pending, (state, action) => {
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(createUser.fulfilled, (state, action) => {
            state.email = action.payload;
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
        })
        .addCase(createUser.rejected, (state, action) => {
            state.isLoading = false;
            state.email = "";
            state.isError = true;
            state.error = action.error.message;
            state.isSuccess = false;
        })
        //Login Users
        .addCase(loginUser.pending, (state, action) => {
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.email = action.payload;
            state.isError = false;
            state.isSuccess = true;
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false;
            state.email = "";
            state.isError = true;
            state.error = action.error.message;
            state.isSuccess = false;
        })
    }
})

export const {logoutUser, setUser} = authSlice.actions;
export default authSlice.reducer;