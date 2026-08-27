import { createStore, combineReducers } from 'redux';
import postsReducer from './slices/postsSlice';

const rootReducer = combineReducers({
    posts: postsReducer,
});

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
