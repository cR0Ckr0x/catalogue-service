import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Profile from '../../../src/components/profile/profile';

describe('Profile View', () => {
    let component;
    beforeEach(() => {
        component = shallow(<Profile/>);
    });

    it('renders the component correctly', () => {
        expect(component.find('.profile-component')).to.have.length(1);
    });
});