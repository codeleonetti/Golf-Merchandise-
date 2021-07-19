import { combineReducers } from 'redux';
import {merchandiseReducer} from './merchandiseReducer';
import {companyReducer} from './companyReducer';
import { companyMerchReducer } from './companyMerchReducer';
// export default combineReducers({
//     merchandiseReducer,
// })


const reducers = combineReducers({
    allProducts: merchandiseReducer, 
    companyReducer,
    companyMerchReducer
});

export default reducers;