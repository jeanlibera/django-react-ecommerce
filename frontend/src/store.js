import { configureStore, combineReducers } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import { productDetailsReducer, productListReducer } from './reducers/productReducers.js'

const reducer = combineReducers({
    productDetails: productDetailsReducer,
    productList: productListReducer,
});

const initialState = {};

const middleware = [thunk];

const store = configureStore({
    reducer: reducer,
    preloadedState: initialState, 
    middleware: middleware
});

export default store;