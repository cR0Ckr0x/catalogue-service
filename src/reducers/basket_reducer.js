import {ADD_PRODUCT_BASKET, EMPTY_BASKET, REM_PRODUCT_BASKET} from "../actions/types";

export const initialState = { selectedProducts: [] };

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_PRODUCT_BASKET:
            let selectedProducts = state.selectedProducts.slice();
            selectedProducts.push(action.payload);
            return { ...state, selectedProducts };
        case REM_PRODUCT_BASKET:
            return { ...state, selectedProducts: state.selectedProducts.filter(p => p.id !== action.payload.id) };
        case EMPTY_BASKET:
            return { ...state, selectedProducts: [] };
    }
    return state;
}