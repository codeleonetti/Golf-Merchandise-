import {ActionTypes} from '../constants/action-types';

const intialState = {
    company:[]
    
};

export const companyReducer = (state= intialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            console.log(payload)
            return {...state, company:payload};
        default:
            return state;
    }
};