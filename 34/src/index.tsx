import axios from 'axios';
import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import '../scss/styles.scss';

function App() {
    const [todosCount, setTodosCount] = useState<number | null>(null);

    useEffect(() => {
        async function fetchTodos() {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
                setTodosCount(response.data.length);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchTodos();
    }, []);

    return (
        <main>
            <h1>React + Webpack + TypeScript</h1>
            <p>Todos loaded: {todosCount ?? 'loading...'}</p>
        </main>
    );
}

const container = document.getElementById('root');

if (!container) {
    throw new Error('Root container not found');
}

createRoot(container).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
