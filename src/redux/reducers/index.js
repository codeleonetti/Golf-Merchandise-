import { combineReducers } from 'redux';
import {merchandiseReducer} from './merchandiseReducer';

const reducers = combineReducers({
    allProducts: merchandiseReducer,
});

export default reducers;