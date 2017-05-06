import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { Profile } from '../../../src/components/profile/profile';

describe('Profile View', () => {
    let component;
    beforeEach(() => {
        const user = { customerID: 1 };
        component = shallow(<Profile user={user} getUserLocationID={()=>{}} />);

    });

    it('renders the component correctly', () => {
        expect(component.find('.profile-component')).to.have.length(1);
    });
    it('has a select option with locationID=1 to change the location home', () => {
        expect(component.find('select option[value="1"]').html()).to.exist;
    });
});