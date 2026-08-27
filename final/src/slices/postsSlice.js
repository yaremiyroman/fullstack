import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { BASE_URL } from '../api';


export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    console.log('fetchPosts > ');

    const response = await axios.get(BASE_URL);

    return response.data;
});

// pending
// fulfilled
// rejected

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        postsData: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.postsData = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
});

export default postsSlice.reducer;
