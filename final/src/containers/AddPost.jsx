import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';

import { addPost, clearCurrentPost } from '../slices/postsSlice';
import { generateDummyUUID } from '../utils';

import Input from '@mui/material/Input';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';

const AddPostForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  /* Targets the component when the $isLoading prop is true */
  ${props => props.$isLoading && `
    opacity: 0.5;
    pointer-events: none;
    cursor: default;
  `}
`;

const PostTitle = styled(Input)`
  color: #ccc;
  font-size: 20px;
`;

const PostBody = styled(TextareaAutosize)`
  color: #ccc;
  background: transparent;
  font-size: 20px;
`;

const PostSubmit = styled(Button)`
`;

function AddPost() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');

  const isLoading = useSelector(state => state.posts.loading);
  const newPostID = useSelector(state => state.posts.post?.id);

  useEffect(() => {
    if (!!newPostID)
      navigate(`/post/${newPostID}`);

    // 👇 This runs automatically when the user leaves this page
    return () => {
      dispatch(clearCurrentPost());
    };
  }, [newPostID, dispatch, navigate]);

  const handlePostTitleInput = (event) => {
    setPostTitle(event.target.value);
  }

  const handlePostBodyInput = (event) => {
    setPostBody(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(
      addPost({
        userID: 1,
        title: postTitle,
        body: postBody,
        uuid: generateDummyUUID(),
      })
    );
  };

  return (<>
    <h1>Add Post</h1>
    <AddPostForm onSubmit={handleSubmit} $isLoading={isLoading}>
      <PostTitle
        type="text"
        name="title"
        placeholder="Title..."
        onInput={handlePostTitleInput}
        value={postTitle}
        sx={{ color: '#ccc' }}
      />
      <PostBody
        name="body"
        id="body"
        placeholder="Body..."
        onInput={handlePostBodyInput}
        value={postBody}
        minRows={10}
      ></PostBody>
      <PostSubmit variant="contained" type='submit'>Додати Пост</PostSubmit>
    </AddPostForm>
  </>);
}

export default AddPost;
