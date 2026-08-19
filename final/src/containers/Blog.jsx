import { useState, useEffect } from 'react';
import { Link, Outlet, useNavigate, useParams, useSearchParams } from 'react-router-dom';

function Blog() {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const { id: postID } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError('');

        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postID}`,
          { signal: controller.signal }
        );

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

    return () => controller.abort();
  }, [postID]);


  if (isLoading) {
    return <p>Loading post...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const filter = searchParams.get('filter');

  const handleParam = (value) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('filter', value);
    setSearchParams(newParams);
  };

  if (!post) {
    return <p>Post not found.</p>;
  }

  return (
    <section>
      <button onClick={() => navigate('/about')}>
        Перейти на ABOUT
      </button>
      <button onClick={() => handleParam('active')}>Активні</button>
      <button onClick={() => handleParam('archived')}>Архівні</button>
      <p>Current filter: {filter ?? 'none'}</p>

      <p>
        <Link to="test">Open nested test route</Link>
      </p>

      <p>
        <Link to="/post/1">Post 1</Link> | <Link to="/post/2">Post 2</Link> |{' '}
        <Link to="/post/3">Post 3</Link>
      </p>

      <h1>{post.title}</h1>
      <em>Authored by user #{post.userId}</em>
      <p>{post.body}</p>
      <Outlet />
    </section>
  )
}

export default Blog;
