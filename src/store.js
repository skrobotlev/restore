import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import thunkMiddleware from "redux-thunk";

const logMiddleWare = ({ getState }) => (dispatch) => (action) => {
    console.log(action.type, getState());
    return dispatch(action);
}
// const logMiddleWare = (store) => (dispatch) => (action) => {
//     console.log(action.type, store.getState());
//     return dispatch(action);
// }
// ПИШЕТСЯ ЛИБО NEXT ЛИБО DISPATCH
const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        });
    }
    return next(action);
}

// const logEnhancer = (createStore) => (...args) => {
//     const store = createStore(...args);
//     const originalDispatch = store.dispatch;
//     store.dispatch = (action) => {
//         console.log(action.type);
//         return originalDispatch(action)
//     }
//     return store;
// };

// const stringEnhancer = (createStore) => (...args) => {
//     const store = createStore(...args);
//     const originalDispatch = store.dispatch;
//     store.dispatch = (action) => {

//         if (typeof action === 'string') {
//             return originalDispatch({
//                 type: action
//             })
//         }
//         originalDispatch(action)
//     }
//     return store;
// }

const store = createStore(reducer,
    applyMiddleware(thunkMiddleware, stringMiddleware, logMiddleWare));


const delayedActionCreator = (timeout) => (dispatch) => {
    setTimeout(() => dispatch({
        type: 'DELAYED_ACTION'
    }), 2000)
}

store.dispatch(delayedActionCreator(3000))

// MONKEY PATCHING
// const originalDispatch = store.dispatch;
// store.dispatch = (action) => {

//     if (typeof action === 'string') {
//         return originalDispatch({
//             type: action
//         })
//     }
//     originalDispatch(action)
// }


store.dispatch("HELLO_WORLD");

export default store;