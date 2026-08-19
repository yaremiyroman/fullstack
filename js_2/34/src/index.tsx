import axios from 'axios';
import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import '../scss/styles.scss';

function App() {
    const [todosCount, setTodosCount] = useState<number | null>(null);
    const [lazyMessage, setLazyMessage] = useState<string>('');

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

    function loadDynamicMessage() {
        import(/* webpackChunkName: "lodash-chunk" */ 'lodash')
            .then(({ default: _ }) => {
                const message = _.join(
                    ['Lodash', 'loaded', 'via', 'dynamic', 'import'],
                    ' ',
                );
                setLazyMessage(message);
            })
            .catch((error) => {
                console.error('Error loading lodash chunk:', error);
            });
    }

    return (
        <main>
            <h1>React + Webpack + TypeScript</h1>
            <p>Todos loaded: {todosCount ?? 'loading...'}</p>
            <button type="button" onClick={loadDynamicMessage}>
                Load lodash dynamically
            </button>
            {lazyMessage && <p>{lazyMessage}</p>}
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
