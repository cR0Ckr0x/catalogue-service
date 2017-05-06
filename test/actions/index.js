import { expect } from 'chai';
import * as actions from '../../src/actions';
import * as types from "../../src/actions/types";
import sinon from 'sinon';

describe('Actions', () => {

    describe('CHANGE_AUTH', () => {
        it('has the correct type', () => {
            const action = actions.authenticate(true);
            expect(action.type).to.equal(types.CHANGE_AUTH);
        });
        it('has the correct payload', () => {
            const action = actions.authenticate(true);
            const positive_payload = { authenticated: true, customerID: 1 };
            expect(action.payload).to.eql(positive_payload);
        });
    });

    describe('GET_USER_LOCATIONID', () => {
        it('correctly dispatches 1 action', () => {
            const action = actions.getUserLocationID(1);
            const dispatchMock = sinon.spy();
            const functionMock = () => () => { locationID: 1 };
            action(dispatchMock, functionMock);
            expect(dispatchMock).to.have.property('callCount', 1);
        });
    });

    describe('SET_USER_LOCATIONID', () => {
        it('correctly dispatches 2 actions', () => {
            const action = actions.changeUserLocationID(1);
            const dispatchMock = sinon.spy();
            const functionMock = () => () => { locationID: 1 };
            action(dispatchMock, functionMock);
            expect(dispatchMock).to.have.property('callCount', 2);
        });
    });

    describe('ADD_PRODUCT_BASKET', () => {
        it('has the correct type', () => {
            const action = actions.addProductToBasket(true);
            expect(action.type).to.equal(types.ADD_PRODUCT_BASKET);
        });
        it('has the correct payload', () => {
            const action = actions.addProductToBasket(true);
            const positive_payload = true;
            expect(action.payload).to.eql(positive_payload);
        });
    });

    describe('REM_PRODUCT_BASKET', () => {
        it('has the correct type', () => {
            const action = actions.removeProductFromBasket({});
            expect(action.type).to.equal(types.REM_PRODUCT_BASKET);
        });
        it('has the correct payload', () => {
            const action = actions.removeProductFromBasket({});
            const positive_payload = {};
            expect(action.payload).to.eql(positive_payload);
        });
    });

    describe('EMPTY_BASKET', () => {
        it('has the correct type', () => {
            const action = actions.emptyBasket();
            expect(action.type).to.equal(types.EMPTY_BASKET);
        });
        it('has the correct payload', () => {
            const action = actions.emptyBasket();
            const positive_payload = true;
            expect(action.payload).to.eql(positive_payload);
        });
    });
});

