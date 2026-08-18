import { Link } from 'react-router-dom';

function Home() {
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
      <p>Welcome! This is a starter React Router setup.</p>
    </section>
  )
};

export default Home;
