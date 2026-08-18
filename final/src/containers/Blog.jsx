import { useState, useEffect } from 'react';
import { useParams, useLocation, useRoutes } from 'react-router';
import { useSearchParams, useMatch, Link, useNavigate } from 'react-router-dom';
import Test from './Test';

function Blog() {
  const [post, setPost] = useState(null);
  const { id: postID } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation(); // Отримання поточного місцезнаходження

  const navigate = useNavigate();

  const routes = useRoutes([
    { path: '/test', element: <Test /> }
    // Можна додати більше маршрутів тут
  ]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`);
        const data = await response.json();

        setPost(data); // Збереження отриманих даних
      } catch (error) {
        console.error('Помилка отримання даних:', error);
      }
    };

    fetchData();
  }, []); // Пустий масив залежностей - ефект виконається один раз


  if (!post) {
    return null;
  }

  // const params = new URLSearchParams(location.search);

  // console.log(Object.fromEntries(params.entries()));

  const filter = searchParams.get('filter');

  console.log('filter > ', filter);


  const handleParam = (value) => {
    const newParams = {};

    for (let paramKey of searchParams) {
      newParams[paramKey[0]] = paramKey[1];
    }

    newParams.myParam = value;

    setSearchParams(newParams);
  };

  return (
    <section>
      {routes}
      <button onClick={() => navigate('/about')}>
        Перейти на ABOUT
      </button>
      <button onClick={() => handleParam('active')}>Активні</button>
      <h1>{post.title}</h1>
      <em>Authored by user #{post.userId}</em>
      <p>{post.body}</p>
    </section>
  )
}

export default Blog;
