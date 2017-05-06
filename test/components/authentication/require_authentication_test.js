import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import requireAuth, { Authentication } from '../../../src/components/authentication/require_authentication';
import configureMockStore from 'redux-mock-store';

describe('Require Authentication HOC', () => {

    it('renders a passed Component correctly when the requesting user is authenticated', () => {
        const StubComponent = () => <div className="stub-component">Stub Component</div>;
        const mockStore = configureMockStore();
        const store = mockStore({user: { authenticated: true }});

        const Auth = requireAuth(StubComponent);
        const wrapper = shallow(<Auth store={store} />);

        expect(wrapper.html().indexOf('<div class="stub-component">Stub Component</div>')).to.equal(0);
    });

});