/**
 * Authenticates an user
 *
 * @param isLoggedIn whether the user is going to be set as logged or not
 *
 * @returns {{type, payload: {authenticated: *, customerID: *, locationID: *}}}
 */
import {
    ADD_PRODUCT_BASKET, CHANGE_AUTH, EMPTY_BASKET, GET_USER_LOCATIONID, REM_PRODUCT_BASKET,
    SET_USER_LOCATIONID
} from './types';
import { isCustomerIDValid } from '../DbUtils.js';

/**
 * Authenticates an user and prepares the state with user-data
 * such as customerID
 *
 * @param isLoggedIn whether the user is going to be logged in
 * or not
 *
 * @returns {{type, payload: {authenticated: *, customerID: *}}}
 */
export function authenticate(isLoggedIn) {
    return {
        type: CHANGE_AUTH,
        payload: {
            authenticated: isLoggedIn,
            customerID: (isLoggedIn?1:null)
        }
    }
}

/**
 * Retrieves the locationID for a specific customerID passed
 *
 * @param customerID the ID of the user for which to retrieve the locationID
 *
 * @returns {{type, payload: {locationID: number}}} or throws an error in
 * case the customerID is not valid
 */
export function getUserLocationID(customerID) {
    if (isCustomerIDValid(customerID)) {
        return (dispatch, getState) => {
            const action = {
                type: GET_USER_LOCATIONID,
                payload: {
                    locationID: getState().locationID || 2
                }
            };
            dispatch(action);
        }

    } else {
        throw 'There was a problem retrieving the customer information';
    }
}

/**
 * Changes the current home location of a user
 *
 * @param newLocationID the new locationID to associate with the user
 *
 * @returns {{type, payload: {locationID: number}}}
 */
export function changeUserLocationID(newLocationID) {
    return (dispatch, getState) => {
        const action = {
            type: SET_USER_LOCATIONID,
            payload: {
                locationID: newLocationID
            }
        };
        dispatch(action);
        dispatch(emptyBasket());
    }
}

/**
 * Adds a product to the current user basket
 *
 * @param product to be added to the selected
 * ones
 *
 * @returns {{type, payload: *}}
 */
export function addProductToBasket(product) {
    return {
        type: ADD_PRODUCT_BASKET,
        payload: product
    };
}

/**
 * Removes a product from the current user basket
 *
 * @param product to be removed from the selected
 * ones
 *
 * @returns {{type, payload: *}}
 */
export function removeProductFromBasket(product) {
    return {
        type: REM_PRODUCT_BASKET,
        payload: product
    };
}

/**
 * Empties the basket of the current user
 *
 * @returns {{type, payload: boolean}}
 */
export function emptyBasket() {
    return {
        type: EMPTY_BASKET,
        payload: true
    };
}