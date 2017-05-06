import {GET_USER_LOCATIONID, SET_USER_LOCATIONID} from "../actions/types";

export const initialState = null;

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_USER_LOCATIONID:
            return action.payload.locationID;
        case SET_USER_LOCATIONID:
            return action.payload.locationID;
    }
    return state;
}