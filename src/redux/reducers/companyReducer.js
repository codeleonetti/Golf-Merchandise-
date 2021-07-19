import {ActionTypes} from '../constants/action-types';

const intialState = {
    company:[]
    
};

export const companyReducer = (state= intialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_COMPANIES:
            console.log(payload)
            return {...state, company:payload};
        default:
            return state;
    }
};








// export default (state = [], action) =>{

//     switch (action.type) {
//         case 'FETCH_COMPANY':
//            return  [...action.payload]
           
    
//         default:
//           return state;
//     }
// }