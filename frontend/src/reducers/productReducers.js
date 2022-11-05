import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,

    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL
} from '../constants/productConstants'

export const productListReducer = (state = {products:[]}, action) => {
    console.log("Started productListReducer")
    console.log(action.type)
    switch(action.type) {
        case PRODUCT_LIST_REQUEST:
            // products are loading
            return { loading:true, products:[] }

        case PRODUCT_LIST_SUCCESS:
            // the api call to get products returned the data
            return { loading:false, products:action.payload }

        case PRODUCT_LIST_FAIL:
            // the api call failed
            return { loading:false, error: action.payload }

        default:
            // there are many other system action types, e.g. one for init
            return state
    }
};

export const productDetailsReducer = (state = {product: {reviews:[]} }, action) => {
    console.log("Started productListReducer")
    console.log(action.type)
    switch(action.type) {
        case PRODUCT_DETAILS_REQUEST:
            // product details are loading. ...state is a "spread operator"
            return { loading:true, ...state }

        case PRODUCT_DETAILS_SUCCESS:
            // the api call to get product details returned the data
            return { loading:false, product:action.payload }

        case PRODUCT_DETAILS_FAIL:
            // the api call failed
            return { loading:false, error: action.payload }

        default:
            // there are many other system action types, e.g. one for init
            return state
    }
};