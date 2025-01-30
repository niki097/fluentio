import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../apiinstance";

// Login Action
export const login = createAsyncThunk("user/login", async (credentials, { rejectWithValue }) => {
    try {
        const response = await api.post("/login", credentials);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        return response.data.user;
    } catch (error) {
        return rejectWithValue(error.response?.data || "Login failed");
    }
});

// Signup Action
export const signup = createAsyncThunk("user/signup", async (userData, { rejectWithValue }) => {
    try {
        const response = await api.post("/signup", userData);
        localStorage.setItem("user", JSON.stringify(response.data.user));  // Persist user
        return response.data.user;
    } catch (error) {
        return rejectWithValue(error.response?.data || "Signup failed");
    }
});

// Logout Action
export const logout = createAsyncThunk("auth/logout", async (_, { rejectWithValue }) => {
    try {
        await api.get("/logout");  // Call API (if needed)
        localStorage.removeItem("authToken");  // Remove token from storage
        return true;  // Logout success
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});





const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: JSON.parse(localStorage.getItem("user")) || null,
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
                localStorage.setItem("user", JSON.stringify(action.payload));
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                state.user = null;
            })
            .addCase(signup.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
                localStorage.setItem("user", JSON.stringify(action.payload));
            })
            .addCase(signup.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null;
                localStorage.removeItem("user");
            });
    },
});

export default authSlice.reducer;

