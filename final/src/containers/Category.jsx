import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { Card, Loader, Error, Pager, Plug } from '../components';

import { getCategoryByKey, getCategoryKeyFromPostValue } from '../utils/categoryUtils';

const POSTS_PER_PAGE = 10;

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
  const [page, setPage] = useState(1);

  const { catName } = useParams();
  const selectedCategory = getCategoryByKey(catName);
  const selectedCategoryTitle = selectedCategory?.title ?? catName;
  const filteredPosts = (posts ?? []).filter((post) => {
    const postCategoryKey = getCategoryKeyFromPostValue(post.category);

    return postCategoryKey ? postCategoryKey === catName : post.category === catName;
  });

  useEffect(() => {
    setPage(1);
  }, [catName]);

  useEffect(() => {
    const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));

    setPage((prevPage) => Math.min(prevPage, totalPages));
  }, [filteredPosts.length]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error message={error} />;
  }

  if (!posts?.length) {
    return <Plug text="No posts yet..." />;
  }

  if (!filteredPosts.length) {
    return (
      <PageSection>
        <Title>{selectedCategoryTitle}</Title>
        <Plug text="No posts in this category yet..." />
      </PageSection>
    );
  }

  const pageCount = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const pageStart = (page - 1) * POSTS_PER_PAGE;
  const pageEnd = pageStart + POSTS_PER_PAGE;
  const pagedPosts = filteredPosts.slice(pageStart, pageEnd);

  return (
    <PageSection>
      <Title>{selectedCategoryTitle}</Title>
      {pagedPosts.map(({ uuid, title, body, userID, id, category, imagePaths, publishedAt, createdAt, date }) => (
        <Card
          key={uuid}
          title={title}
          description={body}
          author={userID}
          postID={id}
          category={category}
          imagePaths={imagePaths}
          publishedAt={publishedAt ?? createdAt ?? date}
        />
      ))}
      <Pager page={page} pageCount={pageCount} onPageChange={setPage} />
    </PageSection>
  );
}

export default Category;
