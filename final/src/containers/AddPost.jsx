import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import categories from '../data/categories.json';
import { addPost, clearCurrentPost } from '../slices/postsSlice';
import { generateDummyUUID } from '../utils/utils';

import {
  getFileExtension,
  isAllowedImageFormat,
  getImageDimensions,
  handlePostImageInput,
  validatePostImages,
  uploadPostImages,
} from '../utils/imageUtils';

const AddPostForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${props => props.$isLoading && `
    opacity: 0.5;
    pointer-events: none;
    cursor: default;
  `}
`;

const PostTitle = styled.input`
  color: #ccc;
  font-size: 20px;
`;

const PostBody = styled.textarea`
  color: #ccc;
  background: transparent;
  font-size: 20px;
`;

const PostSubmit = styled.button``;

const ImageHint = styled.p`
  margin: 0;
  color: #94a3b8;
`;

const ImageList = styled.ul`
  margin: 0;
  padding-left: 16px;
  color: #e2e8f0;
`;

const ValidationError = styled.p`
  margin: 0;
  color: #fca5a5;
`;

function AddPost() {
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [category, setCategory] = useState('');
  const [postImages, setPostImages] = useState([]);
  const [imageValidationError, setImageValidationError] = useState('');

  const isLoading = useSelector(state => state.posts.loading);
  const newPostID = useSelector(state => state.posts.post?.id);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (newPostID) {
      navigate(`/post/${newPostID}`);
    }

    return () => {
      dispatch(clearCurrentPost());
    };
  }, [newPostID, dispatch, navigate]);

  const handleCategorySelection = (event) => {
    setCategory(event.target.value);
  };

  const handlePostTitleInput = (event) => {
    setPostTitle(event.target.value);
  };

  const handlePostBodyInput = (event) => {
    setPostBody(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const imageValidationErrors = await validatePostImages(postImages);

    if (imageValidationErrors.length > 0) {
      setImageValidationError(imageValidationErrors.join(' '));

      return;
    }

    try {
      const imagePaths = await uploadPostImages(postImages);

      setImageValidationError('');

      dispatch(addPost({
        userID: 1,
        title: postTitle,
        body: postBody,
        category,
        imagePaths,
        uuid: generateDummyUUID(),
      }));
    } catch (error) {
      const message =
        error?.response?.data?.message
        || error.message
        || 'Image upload failed.';

      setImageValidationError(message);
    }
  };

  return (
    <>
      <h1>Add Post</h1>
      <AddPostForm onSubmit={handleSubmit} $isLoading={isLoading}>
        <PostTitle
          type="text"
          name="title"
          placeholder="Title..."
          onInput={handlePostTitleInput}
          value={postTitle}
        />
        <FormControl
          variant="standard"
          sx={{ m: 1, minWidth: 120 }}
        >
          <InputLabel id="category-selector">Category</InputLabel>
          <Select
            labelId="category-selector"
            id="category-selector"
            value={category}
            onChange={handleCategorySelection}
            sx={{ color: 'white' }}
          >
            {categories.cats.map(({ title }) => (
              <MenuItem
                key={title}
                value={title}
              >
                {title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <PostBody
          name="body"
          id="body"
          placeholder="Body..."
          onInput={handlePostBodyInput}
          value={postBody}
        />
        <input
          id="images"
          type="file"
          name="images"
          accept=".img,.png,image/png"
          multiple
          onChange={(e) => handlePostImageInput(e, setPostImages, setImageValidationError)}
        />
        <ImageHint>
          Upload up to 5 images, 5MB each, dimensions between 100x100 and 2000x2000.
        </ImageHint>
        {postImages.length > 0 && (
          <ImageList>
            {postImages.map((file) => (
              <li key={`${file.name}-${file.lastModified}`}>
                {file.name}
              </li>
            ))}
          </ImageList>
        )}
        {imageValidationError && (
          <ValidationError role="alert">{imageValidationError}</ValidationError>
        )}
        <PostSubmit type="submit">Додати Пост</PostSubmit>
      </AddPostForm>
    </>
  );
}

export default AddPost;
