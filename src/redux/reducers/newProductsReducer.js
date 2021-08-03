import { ActionTypes } from "../constants/action-types";


const intialState ={
    addedProducts:[],
}

export const newProductsReducer = (state = intialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.ADD_PRODUCTS:
            
            return{...state, addedProducts:payload};
    
        default:
            return state;
    }
}
