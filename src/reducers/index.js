import { combineReducers } from 'redux';
import BooksReducers from './reducer_books';

const rootReducer = combineReducers({
    books: BooksReducers
})

export default rootReducer