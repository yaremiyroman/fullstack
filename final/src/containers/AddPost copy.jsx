import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';

import { addPost } from '../slices/postsSlice';
import { generateDummyUUID } from '../utils';

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

const PostTitle = styled.input`
  background: #ccc;
  color: black;
  font-size: 20px;
`;

const PostBody = styled.textarea`
  background: #ccc;
  color: black;
  font-size: 20px;
`;

const PostSubmit = styled.button`
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
  }, [newPostID]);

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


  const handleSubmit = (values, { setSubmitting }) => {
    // Імітація відправки на сервер 
    console.log('Дані форми:', values);
    // Позначаємо що форма більше не в процесі відправки
    setSubmitting(false);
  };

  console.log('newPostID > ', newPostID);

  return (<>
    <h1>Add Post</h1>
    <AddPostForm onSubmit={handleSubmit} $isLoading={isLoading}>
      <PostTitle
        type="text"
        name="title"
        placeholder="Title..."
        onInput={handlePostTitleInput}
        value={postTitle}
      />
      <PostBody
        name="body"
        id="body"
        placeholder="Body..."
        onInput={handlePostBodyInput}
        value={postBody}
      ></PostBody>
      <PostSubmit>Додати Пост</PostSubmit>
    </AddPostForm>


    <Formik
      initialValues={{ name: '', email: '' }}
      onSubmit={handleSubmit}
    >
      {/* Компонент Form з доступом до стану форми */}
      {({ isSubmitting }) => (
        <Form>
          {/* Поле для введення імені */}
          <Field
            type="text"
            name="name"
            placeholder="Ім'я"
          />

          {/* Поле для введення email */}
          <Field
            type="email"
            name="email"
            placeholder="Email"
          />

          {/* Кнопка відправки форми */}
          <button
            type="submit"
            disabled={isSubmitting}
          >
            Відправити
          </button>
        </Form>
      )}
    </Formik>
  </>);
}

export default AddPost;
