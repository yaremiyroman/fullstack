import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import Plug from '../components/Plug';

import { BASE_URL, resolveImageUrl } from '../api';
import { deletePost } from '../slices/postsSlice';

import styled from 'styled-components';

const PostPreview = styled.img`
  display: 'block',
  maxWidth: '100%',
  maxHeight: '340px',
  objectFit: 'cover',
  borderRadius: '8px',
  marginTop: '16px',
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
    <>
      <h1>
        {post.title}
        <span onClick={handlePostDeletion}>❌</span>
      </h1>
      <em>Authored by user #{post.userID}</em>
      {previewImageSrc && (
        <PostPreview
          src={previewImageSrc}
          alt={`${post.title} preview`}
        />
      )}
      <p>{post.body}</p>
    </>
  );
}

export default Post;
