import { useState, useEffect, useRef } from 'react';

import CardWithChildren from './components/CardWithChildren';
import vite from './assets/vite.svg';

function App() {
  const [user, setUser] = useState(null);
  const [testInput, setTestInput] = useState('');
  const [text, setText] = useState('');
  const [select, setSelect] = useState(1);
  const [radios, setRadios] = useState("1");
  const [selectedItems, setSelectedItems] = useState([]);
  const inputRef = useRef(null); // Створення ref для доступу до textarea

  const handleScroll = function () {
    console.log('scroll');
  };

  useEffect(() => {
    console.log('EFFECT');

    // 1. Capture the element in a local variable right now
    const currentInput = inputRef.current;

    // 2. Only add the listener if the element actually exists
    if (currentInput) {
      currentInput.addEventListener('scroll', handleScroll);
    }

    // Функція для отримання даних
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await response.json();

        setUser(data); // Збереження отриманих даних
      } catch (error) {
        console.error('Помилка отримання даних:', error);
      }
    };

    fetchData();

    // CLEANUP
    return () => {
      console.log('HOOK CLEANUP>>>>>');

      // 3. Use the captured variable instead of inputRef.current
      if (currentInput) {
        currentInput.removeEventListener('scroll', handleScroll);
      }
    };
  }, []); // Пустий масив залежностей - ефект виконається один раз

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleInput = (event) => {
    setTestInput(event.target.value);
  }

  const handleTextInput = (event) => {
    setText(event.target.value);
  }

  const handleSelection = (event) => {
    setSelect(event.target.value);
  }

  const handleRadios = (event) => {
    setRadios(event.target.value);
  }

  const handleCheckboxes = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      // Add the item to the array if it was checked
      setSelectedItems([...selectedItems, value]);
    } else {
      // Remove the item from the array if it was unchecked
      setSelectedItems(selectedItems.filter((item) => item !== value));
    }
  }

  return <form onSubmit={handleSubmit}>
    {user ? (
      // Відображення даних користувача
      <div>
        <p>Ім'я: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>
    ) : (
      // Відображення стану завантаження
      <p>Завантаження даних користувача...</p>
    )}

    <label>
      Ім'я:
      <input type="text" name="testInput" onInput={handleInput} value={testInput} />
    </label>
    <br /><br /><br />
    {radios === "2" ? null : <textarea
      name="testText"
      ref={inputRef}
      onInput={handleTextInput}
      value={text}
    ></textarea>}

    <br /><br />


    <select value={select} name="testSelect" onChange={handleSelection}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>

    <br />

    <fieldset>
      <legend>Select an option:</legend>
      <label>
        <input
          type="radio"
          name="testRadioGroup"
          value="1"
          checked={radios === "1"}
          onChange={handleRadios}
        />
        Option 1
      </label>
      <label>
        <input
          type="radio"
          name="testRadioGroup"
          value="2"
          checked={radios === "2"}
          onChange={handleRadios}
        />
        Option 2
      </label>
      <label>
        <input
          type="radio"
          name="testRadioGroup"
          value="3"
          checked={radios === "3"}
          onChange={handleRadios}
        />
        Option 3
      </label>
    </fieldset>
    <br /><br />
    <fieldset>
      <legend>Select multiple options:</legend>

      <label>
        <input
          type="checkbox"
          name="testCheckboxGroup"
          value="1"
          checked={selectedItems.includes("1")}
          onChange={handleCheckboxes}
        />
        Option 1
      </label>

      <label>
        <input
          type="checkbox"
          name="testCheckboxGroup"
          value="2"
          checked={selectedItems.includes("2")}
          onChange={handleCheckboxes}
        />
        Option 2
      </label>

      <label>
        <input
          type="checkbox"
          name="testCheckboxGroup"
          value="3"
          checked={selectedItems.includes("3")}
          onChange={handleCheckboxes}
        />
        Option 3
      </label>

      <label>
        <input
          type="checkbox"
          name="testCheckboxGroup"
          value="4"
          checked={selectedItems.includes("4")}
          onChange={handleCheckboxes}
        />
        Option 4
      </label>
    </fieldset>

    <button type="submit">Надіслати</button>
    <br />
    <br />
    <br />

    <CardWithChildren someProp="some value!!!!">
      <img src={vite} />
      <span>I AM SPAN</span>
      <h2>Some Title is Here</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis libero consectetur nulla deserunt! Aspernatur, recusandae repellat! Dolorem minus laborum ab voluptatibus, voluptatum dolore ipsum perspiciatis vero, eaque sint voluptate eum!</p>
    </CardWithChildren>

    <br />
  </form>;
};

export default App;
