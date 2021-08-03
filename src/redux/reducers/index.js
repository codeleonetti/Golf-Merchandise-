import { combineReducers } from 'redux';
import {merchandiseReducer} from './merchandiseReducer';
import {companyReducer} from './companyReducer';
import { companyMerchReducer } from './companyMerchReducer';
import { newProductsReducer} from './newProductsReducer';
// export default combineReducers({
//     merchandiseReducer,
// })


const reducers = combineReducers({
    allProducts: merchandiseReducer, 
    companyReducer,
    companyMerchReducer,
    newProductsReducer

});

export default reducers;