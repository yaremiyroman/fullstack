import { useState, useEffect } from 'react';
import { Link, Outlet, useParams, useViewTransitionState } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { BASE_URL } from '../api';
import { combineSlices } from '@reduxjs/toolkit';

import { deletePost } from '../slices/postsSlice';

function Post() {
  const [post, setPost] = useState(useSelector(state => state.posts.post));
  const { id: postID } = useParams();

  const isLoading = useSelector(state => state.posts.loading);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${BASE_URL}/${postID}`);

      const data = await response.json();

      setPost(data); // Збереження отриманих даних
    };

    if (post == null) {
      console.log(' FETCH >>>>');

      fetchData();
    }
  }, [postID]);


  const handlePostDeletion = (e) => {
    e.preventDefault();

    dispatch(deletePost(post.id));

    navigate(`/`);
  }

  if (isLoading) {
    return <p>Loading post...</p>;
  }

  if (!post) {
    return <p>Post not found.</p>;
  }

  return (
    <section>
      <h1>
        {post.title}
        <span onClick={handlePostDeletion}>❌</span>
      </h1>
      <em>Authored by user #{post.userID}</em>
      <p>{post.body}</p>
    </section>
  )
}

export default Post;


// FULLSTACK - business programming - MERN + AI + React Native
// AI  - chatbox, helper, assistant, ai automation... Python
// IoT - rapsberryPi, smart home appliances,
// CyberSecurity
