import {ActionTypes} from '../constants/action-types';

const intialState = [];

export const merchandiseReducer = (state= intialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return payload
        case ActionTypes.ADD_PRODUCTS:
            return [...state, payload]
        default:
            return state;
    }
};