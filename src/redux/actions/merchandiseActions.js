import {ActionTypes} from "../constants/action-types";

export const setCompanies = (companies) => {
    return {
        type: ActionTypes.SET_COMPANIES,
        payload: companies,
    };
};

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};

export const selectedProducts = (companyMerch) => {
    return {
        type: ActionTypes.SELECTED_PRODUCTS,
        payload: companyMerch,
    };
};