import React from 'react';
import { expect } from 'chai';

import userReducer, { initialState } from '../../src/reducers/user_reducer';
import {CHANGE_AUTH} from '../../src/actions/types';

describe('User Reducer', () => {
    it('handles action with unknown type or malformed requests', () => {
        expect(userReducer(undefined, {})).to.eql(initialState);
    });
    it('returns an object as default state', () => {
        const unknown_action = { type: "unknown action type", payload: "" };
        expect(userReducer({}, unknown_action)).to.eql({});
    });
    it('handles action of type CHANGE_AUTH', () => {
        const payload = { authenticated: true, customerID: 1 };
        const action = { type: CHANGE_AUTH, payload: payload };
        expect(userReducer({}, action)).to.eql(payload);
    });
});