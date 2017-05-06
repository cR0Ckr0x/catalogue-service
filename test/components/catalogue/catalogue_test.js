import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';


import { Catalogue } from '../../../src/components/catalogue/catalogue';
import { Basket } from '../../../src/components/basket/basket';

describe('Catalogue View', () => {
    let component;
    beforeEach(() => {
        component = shallow(<Catalogue locationID={1} customerID={1} getUserLocationID={()=>{}} />);
    });

    it('renders the component correctly', () => {
        expect(component.find('.catalogue-component')).to.have.length(1);
    });
});