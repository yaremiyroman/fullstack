import axios from 'axios';
import { vi } from 'vitest';

import { BASE_URL } from '../api';
import { addPost, deletePost, fetchPosts } from './postsSlice';

vi.mock('axios', () => ({
  __esModule: true,
  default: {
    get: vi.fn(),
    post: vi.fn(),
    delete: vi.fn(),
  },
}));

const createThunkContext = () => ({
  dispatch: vi.fn(),
  getState: vi.fn(),
});


// GenAI claude/cursor/chatgpt
// models - pros/const, різновидності, Haiku/Sonnet/Opus
// Context
// Tokens
// Params
// LLM
// State
// Шаблони - delegator-controller/subagents   -- parallel execution -- synchronous
// Messages API - Batch Messages API
// MCP
// Skills




// Hello, World!
// Hel
// lo
//,
// 
// Wor
// ld
// !



describe('posts async thunks', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('dispatches fulfilled when fetchPosts succeeds', async () => {
    const posts = [{ id: 1, title: 'First post' }];

    axios.get.mockResolvedValueOnce({ data: posts });

    const { dispatch, getState } = createThunkContext();

    const result = await fetchPosts()(dispatch, getState, undefined);

    expect(axios.get).toHaveBeenCalledWith(BASE_URL);
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(
      1,
      expect.objectContaining({ type: fetchPosts.pending.type }),
    );
    expect(dispatch).toHaveBeenNthCalledWith(
      2,
      expect.objectContaining({
        type: fetchPosts.fulfilled.type,
        payload: posts,
      }),
    );
    expect(result.type).toBe(fetchPosts.fulfilled.type);
    expect(result.payload).toEqual(posts);
  });

  it('dispatches rejected when fetchPosts fails', async () => {
    const error = new Error('fetch failed');
    axios.get.mockRejectedValueOnce(error);
    const { dispatch, getState } = createThunkContext();

    const result = await fetchPosts()(dispatch, getState, undefined);

    expect(axios.get).toHaveBeenCalledWith(BASE_URL);
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(
      2,
      expect.objectContaining({ type: fetchPosts.rejected.type }),
    );
    expect(result.type).toBe(fetchPosts.rejected.type);
    expect(result.error.message).toBe(error.message);
  });

  it('dispatches fulfilled when addPost succeeds', async () => {
    const postBody = { title: 'New post', body: 'test body' };
    const createdPost = { id: 2, ...postBody };
    axios.post.mockResolvedValueOnce({ data: createdPost });
    const { dispatch, getState } = createThunkContext();

    const result = await addPost(postBody)(dispatch, getState, undefined);

    expect(axios.post).toHaveBeenCalledWith(BASE_URL, postBody);
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(
      1,
      expect.objectContaining({ type: addPost.pending.type }),
    );
    expect(dispatch).toHaveBeenNthCalledWith(
      2,
      expect.objectContaining({
        type: addPost.fulfilled.type,
        payload: createdPost,
      }),
    );
    expect(result.type).toBe(addPost.fulfilled.type);
    expect(result.payload).toEqual(createdPost);
  });

  it('dispatches rejected when addPost fails', async () => {
    const postBody = { title: 'Broken post' };
    const error = new Error('add failed');
    axios.post.mockRejectedValueOnce(error);
    const { dispatch, getState } = createThunkContext();

    const result = await addPost(postBody)(dispatch, getState, undefined);

    expect(axios.post).toHaveBeenCalledWith(BASE_URL, postBody);
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(
      2,
      expect.objectContaining({ type: addPost.rejected.type }),
    );
    expect(result.type).toBe(addPost.rejected.type);
    expect(result.error.message).toBe(error.message);
  });

  it('dispatches fulfilled when deletePost succeeds', async () => {
    const postId = 42;
    const deletedResponse = {};
    axios.delete.mockResolvedValueOnce({ data: deletedResponse });
    const { dispatch, getState } = createThunkContext();

    const result = await deletePost(postId)(dispatch, getState, undefined);

    expect(axios.delete).toHaveBeenCalledWith(`${BASE_URL}/${postId}`);
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(
      1,
      expect.objectContaining({ type: deletePost.pending.type }),
    );
    expect(dispatch).toHaveBeenNthCalledWith(
      2,
      expect.objectContaining({
        type: deletePost.fulfilled.type,
        payload: deletedResponse,
      }),
    );
    expect(result.type).toBe(deletePost.fulfilled.type);
    expect(result.payload).toEqual(deletedResponse);
  });

  it('dispatches rejected when deletePost fails', async () => {
    const postId = 42;
    const error = new Error('delete failed');
    axios.delete.mockRejectedValueOnce(error);
    const { dispatch, getState } = createThunkContext();

    const result = await deletePost(postId)(dispatch, getState, undefined);

    expect(axios.delete).toHaveBeenCalledWith(`${BASE_URL}/${postId}`);
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(
      2,
      expect.objectContaining({ type: deletePost.rejected.type }),
    );
    expect(result.type).toBe(deletePost.rejected.type);
    expect(result.error.message).toBe(error.message);
  });
});
