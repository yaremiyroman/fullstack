import { useState, useEffect, useCallback, useRef, memo } from 'react';

import CardWithChildren from './components/CardWithChildren';
import vite from './assets/vite.svg';


const MyButton = ({ clickHandler, number }) => {
  // Shallow comparison
  console.log('>>>>>');

  return <button onClick={clickHandler}>Increase {number}</button>
};

const MyButtonSimulate = memo(({ clickHandler }) => {
  // Shallow comparison
  console.log('>>>');

  return <button onClick={clickHandler}>Change State</button>
});


function App() {
  const [count, setCount] = useState(0);
  const [simulateNumber, setSimulateNumber] = useState(4);
  const previousCountRef = useRef(count);

  const counterHandler = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  const handleSimulation = useCallback(() => {
    setSimulateNumber(prevNumber => prevNumber + 1 - 1);
  }, []);

  useEffect(() => {
    console.log('count > ', count, 'previous count > ', previousCountRef.current);
  });

  useEffect(() => {
    previousCountRef.current = count;
  }, [count]);




  return (
    <>
      <MyButtonSimulate clickHandler={handleSimulation} />
      <MyButton clickHandler={counterHandler} number={simulateNumber} />
      <p>Current: {count}</p>
      <p>Previous: {previousCountRef.current}</p>
    </>
  );
};

export default App;
