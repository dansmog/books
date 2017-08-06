const SelectBook = (book) => {
    //selectBook is an ActionCrteator, it needs to return an action
    // an object with a type property
    return {
        type: 'BOOK_SELECTED',
        payload: book,
    }
}


export default SelectBook;