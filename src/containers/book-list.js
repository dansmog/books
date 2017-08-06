import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SelectBook } from '../actions/index';
import { bindActionCreators } from 'redux';


class BookList extends Component {
    renderList(){
        return this.props.books.map( (book) => {
            return (
                <li key={book.title} 
                    className="list-group-item"
                    onClick={ () => this.props.SelectBook(book)}
                >{book.title}</li>
            )
        })
    }

    render(){
        return (
            <ul className="list-group">
                {this.renderList()}
            </ul>
        )
    }
}


//return the state value as props to be used in the react component
function mapStateToProps(state){
    return {
        books: state.books
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        SelectBook: SelectBook
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);