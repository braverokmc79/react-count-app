import {combineReducers} from 'redux';
import counter from './counter';
import todos from './todos';
import posts from './posts';

const rootReducers = combineReducers({
    counter,
    todos,
    posts
})

export default rootReducers;

export type RootState = ReturnType<typeof rootReducers>;


