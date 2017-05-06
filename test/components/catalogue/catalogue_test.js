import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Catalogue from '../../../src/components/catalogue/catalogue';

describe('Catalogue View', () => {
    let component;
    beforeEach(() => {
        component = shallow(<Catalogue/>);
    });

    it('renders the component correctly', () => {
        expect(component.find('.catalogue-component')).to.have.length(1);
    });
});