import { combineReducers } from 'redux';
import {merchandiseReducer} from './merchandiseReducer';
import {companyReducer} from './companyReducer';
const reducers = combineReducers({
    allProducts: merchandiseReducer, companyReducer, 
});

export default reducers;