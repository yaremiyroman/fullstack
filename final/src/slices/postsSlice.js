import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { BASE_URL } from '../api';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await axios.get(BASE_URL);

    return response.data;
});

export const addPost = createAsyncThunk('posts/addPost', async (postBody = {}) => {
    const response = await axios.post(BASE_URL, postBody);

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
        post: null,
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
            .addCase(addPost.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(addPost.fulfilled, (state, action) => {
                state.loading = false;
                state.post = action.payload;
            })
            .addCase(addPost.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

    }
});

export default postsSlice.reducer;
