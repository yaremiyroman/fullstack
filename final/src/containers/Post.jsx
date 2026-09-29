import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { Error, Plug } from '../components';

import { BASE_URL, resolveImageUrl } from '../api';
import { deletePost } from '../slices/postsSlice';

const PageSection = styled.section`
  margin: 0 auto;
  padding: 24px 0;
`;

const PostHeader = styled.h1`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 8px;
`;

const DeleteButton = styled.button`
  border: none;
  background: transparent;
  font-size: 1.25rem;
  line-height: 1;
`;

const PostPreview = styled.img`
  display: block;
  max-width: 100%;
  max-height: 340px;
  object-fit: cover;
  border-radius: 8px;
  margin-top: 16px;
  margin-bottom: 16px;
`;

function Post() {
  const currentPost = useSelector(state => state.posts.post);
  const isLoading = useSelector(state => state.posts.loading);
  const error = useSelector(state => state.posts.error);

  const [post, setPost] = useState(currentPost);

  const { id: postID } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentPost?.id === +postID) {
      setPost(currentPost);

      return;
    }

    const fetchData = async () => {
      const response = await fetch(`${BASE_URL}/${postID}`);
      const data = await response.json();

      setPost(data);
    };

    fetchData();
  }, [currentPost, postID]);

  const handlePostDeletion = (event) => {
    event.preventDefault();

    if (!post?.id) {
      return;
    }

    dispatch(deletePost(post.id));
    navigate('/');
  };

  if (isLoading) {
    return <p>Loading post...</p>;
  }

  if (!!error) {
    return <Error message={error} />;
  }

  if (!post) {
    return <Plug text="Post not found." />;
  }

  const previewImage = Array.isArray(post.imagePaths) ? post.imagePaths[0] : null;
  const previewImageSrc = previewImage ? resolveImageUrl(previewImage) : null;

  return (
    <PageSection>
      <PostHeader>
        {post.title}
        <DeleteButton type="button" onClick={handlePostDeletion} aria-label="Delete post">
          ❌
        </DeleteButton>
      </PostHeader>
      <em>Authored by user #{post.userID}</em>
      {previewImageSrc && (
        <PostPreview
          src={previewImageSrc}
          alt={`${post.title} preview`}
        />
      )}
      <p>{post.body}</p>
    </PageSection>
  );
}

export default Post;
