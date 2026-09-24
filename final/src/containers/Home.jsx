import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Card, Loader, Error, Plug } from '../components';

import { BASE_URL } from '../api';
import { fetchPosts } from '../slices/postsSlice';

function Home() {
  const posts = useSelector(state => state.posts.postsData);
  const isLoading = useSelector(state => state.posts.loading);
  const error = useSelector(state => state.posts.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (!!error) {
    return <Error message={error} />;
  }

  if (!posts) {
    return <Plug text="No posts yet..." />;
  }

  return (
    <>
      {posts.map(({ uuid, title, body, userID, id, category }) => (
        <Card
          key={uuid}
          title={title}
          description={body}
          author={userID}
          postID={id}
          category={category}
        />
      ))}
    </>
  );
};

export default Home;
