import React, { Component } from "react";
import BookListItem from "../book-list-item";
import { connect } from 'react-redux';
import { compose } from '../../utils';
import { bindActionCreators } from "redux";

import { fetchBooks, bookAddedToCart } from "../../actions";
import Spinner from "../spinner";
import withBookstoreService from "../hoc";
import ErrorIndicator from '../error-indicator';

import './book-list.css'

const BookList = ({ books, onAddedToCart }) => {
    return (
        <ul className="book-list">
            {
                books.map((book) => {
                    return (
                        <li key={book.id}>
                            <BookListItem onAddedToCart={
                                () => onAddedToCart(book.id)}
                                book={book} />
                        </li>
                    );
                })
            }
        </ul>
    );
}

class BookListContainer extends Component {

    componentDidMount() {
        this.props.fetchBooks();
    }
    // componentDidMount() {
    //     // 1 recieve data
    //     const { bookstoreService, booksLoaded,
    //         booksRequested, booksError } = this.props;
    //     booksRequested();
    //     // const data = bookstoreService.getBooks()
    //     bookstoreService.getBooks()
    //         .then((data) => booksLoaded(data))
    //         .catch((err) => booksError(err));

    //     // 2 dispatch action to store
    //     // this.props.booksLoaded(data);
    // }

    render() {
        const { books, loading, error, onAddedToCart } = this.props;
        if (loading) {
            return <Spinner />
        }
        if (error) {
            return <ErrorIndicator />
        }
        return <BookList books={books} onAddedToCart={onAddedToCart} />
    }
}

// не до конца понимаю MapStates
const mapStateToProps = ({ bookList: { books, loading, error } }) => {
    return { books, loading, error }
};
// const mapStateToProps = (state) => {
//     return {
//         books: state.books
//     }
// }

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
    return bindActionCreators({
        fetchBooks: fetchBooks(bookstoreService),
        onAddedToCart: bookAddedToCart
    }, dispatch);
};

// const mapDispatchToProps = {
//     booksLoaded,
//     booksRequested,
//     booksError
// };
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
    connect(mapStateToProps, mapDispatchToProps))(BookListContainer);