import  axios from 'axios'
import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,

    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
} from '../constants/productConstants'

// HomeScreen.js will trigger this action to get the list of products
// async () => requires the use of redux-thunk.
export const listProducts = () => async (dispatch) => {
    try {
        // trigger the productListReducer, to initialize to loading and product[]
        dispatch({ type: PRODUCT_LIST_REQUEST })

        const { data } = await axios.get('/api/products');

        // trigger the productListReducer, to set product[] to the received data
        dispatch({
            type: PRODUCT_LIST_SUCCESS, 
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL, 
            payload: error.response && 
                error.response.data.message 
                    ? error.response.data.message
                    : error.message
        });
    }
}

// ProductScreen.js will trigger this action
// async () => requires the use of redux-thunk.
export const getProductDetails = (id) => async (dispatch) => {
    try {
        // trigger the productListReducer, to initialize to loading and product[]
        dispatch({ type: PRODUCT_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/products/${id}`);

        // trigger the productDetailsReducer, to set product to the received data
        dispatch({
            type: PRODUCT_DETAILS_SUCCESS, 
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL, 
            payload: error.response && 
                error.response.data.message 
                    ? error.response.data.message
                    : error.message
        });
    }
}