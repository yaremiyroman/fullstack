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



  // body
  // :
  // "This is a mock post served by json-server."
  // id
  // :
  // 1
  // title
  // :
  // "Welcome Post"
  // userID
  // :
  // 1
  // uuid
  // :
  // "2d879610-b4f1-4e89-95da-6fe11b2ecb9d"

  return (
    <section>
      {posts.map(({ uuid, title, body, userID }) => (
        <Card
          key={uuid}
          title={title}
          description={body}
          author={userID}
        />
      ))}
    </section>
  )
};

export default Home;
