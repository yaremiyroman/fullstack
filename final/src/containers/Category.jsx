import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Card from '../components/Card';
import Loader from '../components/Loader';
import Error from '../components/Error';

import { fetchPosts } from '../slices/postsSlice';

import { getCategoryByKey, getCategoryKeyFromPostValue } from '../utils/categoryUtils';

function Category() {
  const posts = useSelector(state => state.posts.postsData);
  const isLoading = useSelector(state => state.posts.loading);
  const error = useSelector(state => state.posts.error);

  const dispatch = useDispatch();
  const { catName } = useParams();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error message={error} />;
  }

  if (!posts) {
    return <p>No posts yet...</p>;
  }

  const selectedCategory = getCategoryByKey(catName);
  const selectedCategoryTitle = selectedCategory?.title ?? catName;

  return (
    <>
      <h2>{selectedCategoryTitle}</h2>
      {posts
        .filter((post) => {
          const postCategoryKey = getCategoryKeyFromPostValue(post.category);

          return postCategoryKey ? postCategoryKey === catName : post.category === catName;
        })
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
    </>
  );
};

export default Category;
