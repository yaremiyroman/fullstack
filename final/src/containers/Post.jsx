import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { BASE_URL } from '../api';
import { deletePost } from '../slices/postsSlice';

const previewImageStyles = {
  display: 'block',
  maxWidth: '100%',
  maxHeight: '340px',
  objectFit: 'cover',
  borderRadius: '8px',
  marginTop: '16px',
};

function Post() {
  const { id: postID } = useParams();
  const currentPost = useSelector(state => state.posts.post);
  const isLoading = useSelector(state => state.posts.loading);
  const [post, setPost] = useState(currentPost);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const selectedPostId = Number(postID);

    if (currentPost?.id === selectedPostId) {
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

  if (!post) {
    return <p>Post not found.</p>;
  }

  const previewImage = Array.isArray(post.imagePaths) ? post.imagePaths[0] : null;

  return (
    <section>
      <h1>
        {post.title}
        <span onClick={handlePostDeletion}>❌</span>
      </h1>
      <em>Authored by user #{post.userID}</em>
      {previewImage && (
        <img
          src={previewImage}
          alt={`${post.title} preview`}
          style={previewImageStyles}
        />
      )}
      <p>{post.body}</p>
    </section>
  );
}

export default Post;
