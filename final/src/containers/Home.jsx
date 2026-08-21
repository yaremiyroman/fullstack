import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Card from '../components/Card'

import { BASE_URL } from '../api';

function Home() {
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError('');

        const response = await fetch(BASE_URL);

        if (!response.ok) {
          throw new Error('Failed to load posts data');
        }

        const data = await response.json();

        setPosts(data); // Збереження отриманих даних
      } catch (error) {
        if (error.name === 'AbortError') {
          return;
        }

        setPosts(null);
        setError(error.message);
        console.error('Error retrieving data', error);
      }
    };

    fetchData();
  }, []);


  if (!posts) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  console.log('posts > ', posts);

  return (
    <section>
      {posts.map(({ uuid, title, body, userID, id }) => (
        <Card
          key={uuid}
          title={title}
          description={body}
          author={userID}
          postID={id}
        />
      ))}
    </section>
  )
};

export default Home;
