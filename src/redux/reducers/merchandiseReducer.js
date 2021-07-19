import {ActionTypes} from '../constants/action-types';

const intialState = {
    merchandise:[],
    
};

export const merchandiseReducer = (state= intialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            console.log(payload)
            return {...state, merchandise:payload};
        default:
            return state;
    }
};

// export default (state = [], action) =>{

//     switch (action.type) {
//         case 'FETCH_MERCH':
//            return  [...action.payload]
           
    
//         default:
//           return state;
//     }
// }