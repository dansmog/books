import { combineReducers } from 'redux';
import BooksReducers from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
    books: BooksReducers,
    activeBook: ActiveBook
})

export default rootReducer