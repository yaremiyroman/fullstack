import { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { BASE_URL } from '../api';

function Post() {
  const [post, setPost] = useState(useSelector(state => state.posts.post));
  const { id: postID } = useParams();

  const isLoading = useSelector(state => state.posts.loading);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${BASE_URL}/${postID}`);

      const data = await response.json();

      setPost(data); // Збереження отриманих даних
    };

    if (post == null) {
      console.log(' FETCH >>>>');

      fetchData();
    }
  }, [postID]);


  if (isLoading) {
    return <p>Loading post...</p>;
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


// FULLSTACK - business programming - MERN + AI + React Native
// AI  - chatbox, helper, assistant, ai automation... Python
// IoT - rapsberryPi, smart home appliances,
// CyberSecurity
