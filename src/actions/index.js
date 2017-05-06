import {CHANGE_AUTH} from "./types";

export function authenticate(isLoggedIn) {
    return {
        type: CHANGE_AUTH,
        payload: {
            authenticated: isLoggedIn,
            customerID: (isLoggedIn?1:null),
            locationID: (isLoggedIn?1:null)
        }
    }
}