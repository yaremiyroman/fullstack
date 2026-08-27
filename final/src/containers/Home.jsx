import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Card from '../components/Card'
import { fetchPosts } from '../slices/postsSlice';
import { BASE_URL } from '../api';

// store - Single Source of Truth
// rootReducer
// reducer
// storeProvider
// action (type, payload)
// actionCreator
// useDispatch/dispatch
// useSelector/selector
// middleware
// thunk(saga)
// redux toolkit
// slice
// axios

function Home() {
  const posts = useSelector(state => state.posts.postsData);
  const isLoading = useSelector(state => state.posts.loading);
  const error = useSelector(state => state.posts.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!!error) {
    return <p>ERROR: {error}</p>;
  }

  if (!posts) {
    return <p>No posts yet...</p>;
  }

  return (
    <section>
      {posts.map(({ uuid, title, body, userID, id }) => (
        <Card
          key={uuid}
          title={title}
          description={body}
          author={userID}
          postID={id}
        />
      ))}
    </section>
  );
};

export default Home;
