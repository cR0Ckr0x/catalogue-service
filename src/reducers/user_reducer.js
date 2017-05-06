import {CHANGE_AUTH, GET_USER_LOCATIONID} from "../actions/types";

export const initialState = {
    authenticated: false,
    customerID: null
}

export default function(state = initialState, action) {
    switch (action.type) {
        case CHANGE_AUTH:
            return { ...state, ...action.payload }
    }
    return state;
}