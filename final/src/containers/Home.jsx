import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Card, Loader, Error, Pager, Plug } from '../components';

const POSTS_PER_PAGE = 10;

function Home() {
  const posts = useSelector(state => state.posts.postsData);
  const isLoading = useSelector(state => state.posts.loading);
  const error = useSelector(state => state.posts.error);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const totalPages = Math.max(1, Math.ceil((posts?.length || 0) / POSTS_PER_PAGE));

    setPage((prevPage) => Math.min(prevPage, totalPages));
  }, [posts]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error message={error} />;
  }

  if (!posts?.length) {
    return <Plug text="No posts yet..." />;
  }

  const pageCount = Math.ceil(posts.length / POSTS_PER_PAGE);
  const pageStart = (page - 1) * POSTS_PER_PAGE;
  const pageEnd = pageStart + POSTS_PER_PAGE;
  const pagedPosts = posts.slice(pageStart, pageEnd);

  return (
    <>
      {pagedPosts.map(({ uuid, title, body, userID, id, category, imagePaths, publishedAt }) => (
        <Card
          key={uuid}
          title={title}
          description={body}
          author={userID}
          postID={id}
          category={category}
          imagePaths={imagePaths}
          publishedAt={publishedAt}
        />
      ))}
      <Pager page={page} pageCount={pageCount} onPageChange={setPage} />
    </>
  );
};

export default Home;
