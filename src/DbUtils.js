/**
 * checks for customerID to be a valid Natural Integer.
 *
 * In a production environment, it should actually test that the customerID
 * is valid and belongs to an existing user
 *
 * @param {number} customerID The ID to check for validity
 *
 * @returns {Boolean} Whether or not the customerID is valid
 */
export function isCustomerIDValid(customerID) {
    return !isNaN(customerID) && customerID % 1 === 0 && customerID > 0;
}