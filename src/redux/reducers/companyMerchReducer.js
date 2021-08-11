import {ActionTypes} from '../constants/action-types';
const intialState ={
    companyMerch:[]
}

export const companyMerchReducer = (state = intialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCTS:
            
            return{...state, companyMerch:payload};
    
        default:
            return state;
    }
}