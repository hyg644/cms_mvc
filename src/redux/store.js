import {createStore, applyMiddleware} from 'redux';
// import thunkMiddleware from 'redux-thunk';
import combineReducers from './reducers';

import promiseMiddleWare from './middleware/promiseMiddleware'

if (module.hot) {
    module.hot.accept("./reducers", () => {
        const nextCombineReducers = require("./reducers").default;
        store.replaceReducer(nextCombineReducers);
    });
}

// let store = createStore(combineReducers, applyMiddleware(thunkMiddleware));
let store = createStore(combineReducers, applyMiddleware(promiseMiddleWare));

export default store;