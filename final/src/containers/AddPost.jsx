import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import { UPLOAD_IMAGES_URL } from '../api';
import categories from '../data/categories.json';
import { addPost, clearCurrentPost } from '../slices/postsSlice';
import { generateDummyUUID } from '../utils/utils';

const MAX_IMAGE_COUNT = 5;
const MAX_IMAGE_SIZE_BYTES = 5 * 1024 * 1024;
const MIN_IMAGE_DIMENSION = 100;
const MAX_IMAGE_DIMENSION = 2000;
const ALLOWED_IMAGE_EXTENSIONS = ['.img', '.png'];
const ALLOWED_IMAGE_MIME_TYPES = ['image/png'];

const getFileExtension = (fileName = '') => {
  const dotIndex = fileName.lastIndexOf('.');

  return dotIndex === -1 ? '' : fileName.slice(dotIndex).toLowerCase();
};

const isAllowedImageFormat = (file) => {
  const extension = getFileExtension(file.name);

  return ALLOWED_IMAGE_EXTENSIONS.includes(extension) || ALLOWED_IMAGE_MIME_TYPES.includes(file.type);
};

const getImageDimensions = (file) => new Promise((resolve, reject) => {
  const image = new Image();
  const imageURL = URL.createObjectURL(file);

  image.onload = () => {
    resolve({ width: image.width, height: image.height });
    URL.revokeObjectURL(imageURL);
  };

  image.onerror = () => {
    URL.revokeObjectURL(imageURL);
    reject(new Error(`Unable to read dimensions for "${file.name}".`));
  };

  image.src = imageURL;
});

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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoading = useSelector(state => state.posts.loading);
  const newPostID = useSelector(state => state.posts.post?.id);

  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [category, setCategory] = useState('');
  const [postImages, setPostImages] = useState([]);
  const [imageValidationError, setImageValidationError] = useState('');

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

  const handlePostImageInput = (event) => {
    const selectedFiles = Array.from(event.target.files ?? []);

    if (selectedFiles.length > MAX_IMAGE_COUNT) {
      setPostImages(selectedFiles.slice(0, MAX_IMAGE_COUNT));
      setImageValidationError(`Only ${MAX_IMAGE_COUNT} images are allowed. Keeping the first ${MAX_IMAGE_COUNT}.`);
      return;
    }

    setPostImages(selectedFiles);
    setImageValidationError('');
  };

  const validatePostImages = async () => {
    const errors = [];

    if (postImages.length > MAX_IMAGE_COUNT) {
      errors.push(`Please upload up to ${MAX_IMAGE_COUNT} images.`);
    }

    for (const file of postImages) {
      if (!isAllowedImageFormat(file)) {
        errors.push(`"${file.name}" has unsupported format. Allowed: img, png.`);
      }

      if (file.size > MAX_IMAGE_SIZE_BYTES) {
        errors.push(`"${file.name}" is larger than 5MB.`);
      }

      try {
        const { width, height } = await getImageDimensions(file);
        const hasValidDimensions =
          width >= MIN_IMAGE_DIMENSION &&
          height >= MIN_IMAGE_DIMENSION &&
          width <= MAX_IMAGE_DIMENSION &&
          height <= MAX_IMAGE_DIMENSION;

        if (!hasValidDimensions) {
          errors.push(
            `"${file.name}" must be between ${MIN_IMAGE_DIMENSION}x${MIN_IMAGE_DIMENSION} and ${MAX_IMAGE_DIMENSION}x${MAX_IMAGE_DIMENSION}.`,
          );
        }
      } catch (error) {
        errors.push(error.message);
      }
    }

    return errors;
  };

  const uploadPostImages = async () => {
    if (postImages.length === 0) {
      return [];
    }

    const formData = new FormData();
    postImages.forEach((imageFile) => {
      formData.append('images', imageFile);
    });

    const response = await axios.post(UPLOAD_IMAGES_URL, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data?.imagePaths ?? [];
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const imageValidationErrors = await validatePostImages();

    if (imageValidationErrors.length > 0) {
      setImageValidationError(imageValidationErrors.join(' '));
      return;
    }

    try {
      const imagePaths = await uploadPostImages();

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
          onChange={handlePostImageInput}
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
