// alert('hello9');

import axios from 'axios';
import '../scss/styles.scss';

// 1. Using Async/Await (Recommended)
async function fetchTodos() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

fetchTodos();

// 2. Using Promises (.then/.catch)
axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(response => {
        console.log('>>>>>>>>>>>>>>>>>>', response.data);
    })
    .catch(error => {
        console.error('Error fetching data:', error.message);
    });
