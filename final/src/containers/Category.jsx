import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { Card, Loader, Error, Plug } from '../components';

import { fetchPosts } from '../slices/postsSlice';

import { getCategoryByKey, getCategoryKeyFromPostValue } from '../utils/categoryUtils';

const PageSection = styled.section`
  margin: 0 auto;
  padding: 24px 0;
`;

const Title = styled.h2`
  margin-bottom: 16px;
`;

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
    return <Plug text="No posts yet..." />;
  }

  const selectedCategory = getCategoryByKey(catName);
  const selectedCategoryTitle = selectedCategory?.title ?? catName;

  return (
    <PageSection>
      <Title>{selectedCategoryTitle}</Title>
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
    </PageSection>
  );
}

export default Category;
