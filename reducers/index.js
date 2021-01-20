import { combineReducers } from 'redux';
import words from './word_reducer';

const rootReducer = combineReducers({
    words
})

export default rootReducer;