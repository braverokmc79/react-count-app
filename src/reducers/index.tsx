import {combineReducers} from 'redux';
import counter from './counter';
import todos from './todos';

const rootReducers = combineReducers({
    counter,
    todos
})

export default rootReducers;

export type RootState = ReturnType<typeof rootReducers>;


