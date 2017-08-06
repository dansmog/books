import { combineReducers } from 'redux';
import BooksReducers from './reducer_books';

const rootReducer = combineReducers({
    books: BookReducer
})

export default rootReducer