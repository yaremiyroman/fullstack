import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPosts } from '../slices/postsSlice';

import Card from '../components/Card'

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
  // const [open, setOpen] = useState(null);
  // const [posts, setPosts] = useState(null);
  const posts = useSelector(state => state.posts.postsData);
  const postsStatus = useSelector(state => state.posts.status);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);


  if (!posts || postsStatus !== 'success') {
    return <p>Loading...</p>;
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
