import { combineReducers } from 'redux';
import {merchandiseReducer} from './merchandiseReducer';
import {companyReducer} from './companyReducer';

// export default combineReducers({
//     merchandiseReducer,
// })


const reducers = combineReducers({
    allProducts: merchandiseReducer, 
    companyReducer
});

export default reducers;