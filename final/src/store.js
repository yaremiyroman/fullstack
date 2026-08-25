import { createStore, combineReducers } from 'redux';
import postsReducer from './reducers/postsReducer';

console.log('postsReducer > ', postsReducer);

const rootReducer = combineReducers({
    posts: postsReducer,
});

export const store = createStore(rootReducer);
