import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Card from '../components/Card';
import { fetchPosts } from '../slices/postsSlice';
import { BASE_URL } from '../api';
import Loader from '../components/Loader';
import Error from '../components/Error';

function Category() {
  const posts = useSelector(state => state.posts.postsData);
  const isLoading = useSelector(state => state.posts.loading);
  const error = useSelector(state => state.posts.error);

  const dispatch = useDispatch();
  const { catName } = useParams();

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
    return <p>No posts yet...</p>;
  }


  console.log('catName ', catName);

  return (
    <section>
      {posts
        .filter(post => post.category === catName)
        .map(({ uuid, title, body, userID, id, category }) => (
          <Card
            key={uuid}
            title={title}
            description={body}
            author={userID}
            postID={id}
            category={category}
          />
        ))}
    </section>
  );
};

export default Category;
