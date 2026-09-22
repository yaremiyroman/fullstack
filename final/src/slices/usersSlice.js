import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { USERS_URL } from '../api';

export const addUser = createAsyncThunk('users/addUser', async (userData = {}) => {
    const response = await axios.post(USERS_URL, userData);

    return response.data;
});

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        usersData: [],
        loading: false,
        error: null,
        user: null,
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(addUser.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(addUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(addUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
});

// export const { clearCurrentPost } = usersSlice.actions;

export default usersSlice.reducer;
