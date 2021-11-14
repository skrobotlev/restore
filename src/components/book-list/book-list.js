import React, { Component } from "react";
import BookListItem from "../book-list-item";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { compose } from '../../utils';

import withBookstoreService from "../hoc";
import { booksLoaded } from '../../actions'

import './book-list.css'

class BookList extends Component {

    componentDidMount() {
        // 1 recieve data
        const { bookstoreService } = this.props;
        const data = bookstoreService.getBooks();
        console.log(data);


        // 2 dispatch action to store
        this.props.booksLoaded(data);
    }

    render() {
        const { books } = this.props;
        return (
            <ul>
                {
                    books.map((book) => {
                        return (
                            <li key={book.id}><BookListItem book={book} /></li>
                        )
                    })
                }
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.books
    }
}

const mapDispatchToProps = {
    booksLoaded
};
// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({
//         booksLoaded
//     }, dispatch);
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         booksLoaded: (newBooks) => {
//             dispatch({
//                 type: 'BOOKS_LOADED',
//                 payload: newBooks
//             })
//         }
//     }
// }

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps))(BookList);