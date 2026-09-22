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


// Name
// Second Name
// DOB
// phone number
// email
// pswd
// pswd confirmation
// confirmation



function Register() {
    // const dispatch = useDispatch();
    // const navigate = useNavigate();

    // const isLoading = useSelector(state => state.posts.loading);
    // const newPostID = useSelector(state => state.posts.post?.id);

    // const [postTitle, setPostTitle] = useState('');
    // const [postBody, setPostBody] = useState('');
    // const [category, setCategory] = useState('');
    // const [postImages, setPostImages] = useState([]);
    // const [imageValidationError, setImageValidationError] = useState('');

    return (
        <>
            <h1>Register</h1>
        </>
    );
}

export default Register;
