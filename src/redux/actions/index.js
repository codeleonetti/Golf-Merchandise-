import React, {useEffect} from 'react';
import {ActionTypes} from '../constants/action-types'
export const fetchMerch = () =>{
      return(dispatch) => {
        fetch('http://localhost:3000/merchandises')
        .then(resp => resp.json())
        .then(merch => { console.log("please render me",merch)

             dispatch({ type: ActionTypes.SET_PRODUCTS, payload: merch})
            
        })
    
    }
}
    
export const fetchCompany = () =>{
    return(dispatch) => {
      fetch('http://localhost:3000/companies')
      .then(resp => resp.json())
      .then(company => { console.log("please render me",company)
            dispatch({ type: ActionTypes.SET_COMPANIES, payload: company})
           
        })
    }
}

export const fetchCompanyMerch = (id) =>{
    return(dispatch) => {
        fetch(`http://localhost:3000/companies/${id}/merchandises`)
        .then (resp => resp.json())
        .then(companyMerch => { console.log("rendering", companyMerch)
            dispatch({ type: ActionTypes.SELECTED_PRODUCTS, payload: companyMerch})
           
        })
    }
}

export const addNewProducts = (newProducts) =>{
    return(dispatch) => {
        fetch('http://localhost:3000/merchandises', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({merchandise: newProducts})
        })
        .then(resp => resp.json())
        .then(newProducts => {
            dispatch({ type: ActionTypes.ADD_PRODUCTS, payload: newProducts})
        })
    }
}


