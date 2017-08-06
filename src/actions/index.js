// import { SELECT_BOOK } from './actiontypes';

// const selectBook = (book) => {
//     //selectBook is an ActionCrteator, it needs to return an action
//     // an object with a type property
//     return {
//         type: 'SELECT_BOOK',
//         payload: book,
//     }
// }


export const SelectBook = (book) => {
    alert(`a book has been selected: ${book.title}`);
}