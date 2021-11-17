import updateShoppingCart from "./shopping-cart";
import updateBookList from "./book-list";

// const initialState = {
//     bookList: {
//         books: [],
//         loading: true,
//         error: null
//     },
//     shoppingCart: {
//         cartItems: [],
//         orderTotal: 0
//     }
// }




const reducer = (state, action) => {
    return {
        bookList: updateBookList(state, action),
        shoppingCart: updateShoppingCart(state, action)
    };

    // console.log(action.type);
    // switch (action.type) {
    //     case 'FETCH_BOOKS_REQUEST':
    //     case 'FETCH_BOOKS_SUCCES':
    //     case 'FETCH_BOOKS_FAILURE':
    //         return {
    //             ...state,
    //             bookList: updateBookList(state, action)
    //         };

    //     case 'BOOK_ADDED_TO_CART':
    //     case 'BOOK_REMOVED_FROM_CART':
    //     case 'ALL_BOOKS_REMOVED_FROM_CART':
    //         return {
    //             ...state,
    //             shoppingCart: updateShoppingCart(state, action)
    //         };

    //     default:
    //         return state;
    // case 'FETCH_BOOKS_REQUEST':
    //     return {
    //         ...state,
    //         books: [],
    //         loading: true,
    //         error: null,
    //     };
    // case "FETCH_BOOKS_SUCCES":
    //     return {
    //         ...state,
    //         books: action.payload,
    //         loading: false,
    //         error: null
    //     };
    // case 'FETCH_BOOKS_FAILURE':
    //     return {
    //         ...state,
    //         books: [],
    //         loading: false,
    //         error: action.payload
    //     };
    // case 'BOOK_ADDED_TO_CART':
    //     return updateOrder(state, action.payload, 1);

    // case 'BOOK_REMOVED_FROM_CART':
    //     return updateOrder(state, action.payload, - 1);
    // case 'ALL_BOOKS_REMOVED_FROM_CART':
    //     const item = state.cartItems.find(({ id }) => id === action.payload);
    //     return updateOrder(state, action.payload, -item.count)
};

export default reducer;