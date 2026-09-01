import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Formik, Form, Field, useFormik, ErrorMessage } from 'formik';
import { object, string } from 'yup';

import { addPost } from '../slices/postsSlice';
import { generateDummyUUID } from '../utils';

const AddPostForm = styled(Form)`
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

const ErrorBox = styled(ErrorMessage)`
    color: red;
    margin: 5px 0 0 0;
`;

// Схема валідації форми реєстрації
const RegistrationSchema = object().shape({
  // Валідація імені
  title: string()
    .min(5, "Занадто коротка назва")
    .max(255, "Занадто довга назва")
    .required("Обов'язкове поле"),

  // Валідація email  
  body: string()
    .min(10, "Занадто коротке ім'я")
    .max(5000, "Занадто довге ім'я")
    .required("Обов'язкове поле"),

  // Валідація email  
  email: string()
    .email('Неправильний формат електронної пошти')
    .required("Обов'язкове поле")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Адреса повинна містити крапку та домен (наприклад, user@example.com)'
    ),
});


function AddPost() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoading = useSelector(state => state.posts.loading);
  const newPostID = useSelector(state => state.posts.post?.id);

  const formik = useFormik({});

  useEffect(() => {
    if (!!newPostID)
      navigate(`/post/${newPostID}`);
  }, [newPostID]);

  const handleSubmit = (values, { setSubmitting }) => {
    // Імітація відправки на сервер 
    console.log('Дані форми:', values);
    // Позначаємо що форма більше не в процесі відправки
    setSubmitting(false);

    dispatch(
      addPost({
        userID: 1,
        title: values.title,
        body: values.body,
        uuid: generateDummyUUID(),
      })
    );
  };

  return (<>
    <h1>Add Post</h1>
    <Formik
      initialValues={{ title: '', body: '' }}
      onSubmit={handleSubmit}
      validationSchema={RegistrationSchema}
    >
      {/* Компонент Form з доступом до стану форми */}
      {({ isSubmitting }) => (
        <AddPostForm>
          {/* Поле для введення імені */}
          <Field
            type="text"
            name="title"
            placeholder="Title..."
            as={PostTitle}
          />
          <ErrorBox name="title" component="div" />

          {/* Поле для введення email */}
          <Field
            name="body"
            id="body"
            placeholder="Body..."
            as={PostBody}
          />
          <ErrorBox name="body" component="div" />

          {/* Поле для введення email */}
          <Field type="email" name="email" placeholder="Електронна пошта" />
          <ErrorBox name="email" component="div" />

          {/* Кнопка відправки форми */}
          <button
            type="submit"
            disabled={isSubmitting}
          >
            Відправити
          </button>
        </AddPostForm>
      )}
    </Formik>
  </>);
}

export default AddPost;
