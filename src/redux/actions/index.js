import React, {useEffect} from 'react';
import {ActionTypes} from '../constants/action-types'
export const fetchMerch = () =>{
      return(dispatch) => {
        fetch('http://localhost:3000/merchandises')
        .then(resp => resp.json())
        .then(merch => { console.log("please render me",merch)

             dispatch({ type: ActionTypes.SET_PRODUCTS, payload: merch})
            // dispatch({ type: "FETCH_MERCH", payload: merch})
        })
    
    }
}
    
export const fetchCompany = () =>{
    return(dispatch) => {
      fetch('http://localhost:3000/companies')
      .then(resp => resp.json())
      .then(company => { console.log("please render me",company)

          dispatch({ type: ActionTypes.SET_COMPANIES, payload: company})
           //dispatch({ type: "FETCH_COMPANY", payload: company})
      })
  
  }
}


// useEffect(() => {
    //     fetchMerch();
    // }, []);


// export default fetchMerch;