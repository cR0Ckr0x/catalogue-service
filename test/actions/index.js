import { expect } from 'chai';
import * as actions from '../../src/actions';
import * as types from "../../src/actions/types";

describe('Actions', () => {

    describe('CHANGE_AUTH', () => {
        it('has the correct type', () => {
            const action = actions.authenticate(true);
            expect(action.type).to.equal(types.CHANGE_AUTH);
        });
        it('has the correct payload', () => {
            const action = actions.authenticate(true);
            const positive_payload = { authenticated: true, customerID: 1, locationID: 1 };
            expect(action.payload).to.eql(positive_payload);
        });
    });
});

