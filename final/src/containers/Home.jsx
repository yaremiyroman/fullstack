import { Link } from 'react-router-dom';

import Card from '../components/Card'

function Home() {
  // BASE_URL
  return (
    <section>
      <Link
        to="/post/4"
        state={{
          from: 'home',
          someInfo: 'some usefull information'
        }}
      >
        link to pass some state
      </Link>
      <h2>Home Page</h2>
      <Card
        title="title"
        description="some description"
      />
      <p>Welcome! This is a starter React Router setup.</p>
    </section>
  )
};

export default Home;
