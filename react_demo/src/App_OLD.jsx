import { useState, useEffect } from 'react';

import Title from './components/Title';
import Description from './components/Description';
import Counter from './components/Counter';
import Button from './components/Button';
import Card from './components/Card';

import vite from './assets/vite.svg';
import react from './assets/react.svg';


const myTitle = 'My Demo Title';
const myDescription = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eos, similique ea saepe facilis est fuga corrupti illo corporis exercitationem iusto incidunt distinctio soluta vero? Laudantium impedit corporis doloribus earum.';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com/todos';

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [someValue, setSomeValue] = useState('DEFAULT');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_BASE_URL);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        // Ignore the error if the fetch operation was aborted purposely
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      }
    };

    if (!data.length) {
      fetchData();
    }

    return () => {
      ('will unmount');
    };
  }); // Empty array ensures this only runs once on mount

  const increment = () => {
    setCount((prevCount) => {
      console.log('--------------');
      console.log('prevCount > ', prevCount);
      console.log('count > ', count);

      return prevCount + 1;
    });
  };

  const changeSomeValue = () => {
    setSomeValue('CHANGED');
  };


  console.log('data > ', data);


  return !!data.length
    ? <h1>Loading ...</h1>
    : <>
      <div className="container">
        <span>{someValue}</span>
        <Title titleText={myTitle} color="green" />
        <ul>
          {data.map((user) => {
            return <li key={user.id}>
              id: {user.id} - {user.title}
            </li>;
          })}
        </ul>
        <Description descriptionContent={myDescription} />
        <Counter counterValue={count} />
        <Button clickHandler={changeSomeValue} title="Додати" />
        <Button clickHandler={increment} />
        <br /><br /><br />
        <Card image={vite} title="First Card" description="Description here" />
        <Card image={react} title="SECOND Card" description="Description here" />
      </div>
      <div>Some Another Content</div>
    </>
};

export default App;
