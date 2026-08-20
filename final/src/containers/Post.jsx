import { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

import { BASE_URL } from '../api';

function Post() {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const { id: postID } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError('');

        const response = await fetch(`${BASE_URL}/${postID}`);

        if (!response.ok) {
          throw new Error('Failed to load post data');
        }

        const data = await response.json();

        setPost(data); // Збереження отриманих даних
      } catch (error) {
        if (error.name === 'AbortError') {
          return;
        }

        setPost(null);
        setError(error.message);
        console.error('Помилка отримання даних:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [postID]);


  if (isLoading) {
    return <p>Loading post...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!post) {
    return <p>Post not found.</p>;
  }



  return (
    <section>
      <h1>{post.title}</h1>
      <em>Authored by user #{post.userID}</em>
      <p>{post.body}</p>
    </section>
  )
}

export default Post;
