import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { Basket } from '../../../src/components/basket/basket';

describe('Basket in Catalogue', () => {
    let component;
    beforeEach(() => {
        const basket = { selectedProducts: [] };
        component = shallow(<Basket basket={basket} />);
    });

    it('renders the component correctly', () => {
        expect(component.find('.basket-component')).to.have.length(1);
    });
    it('shows no checkout button if there are no selected products in the basket', () => {
        expect(component.find('.btn-checkout')).to.have.length(0);
    });
    it('shows checkout button if there is 1 or more selected products in the basket', () => {
        const basket = { selectedProducts: [{id:1}] };
        const wrapper = shallow(<Basket basket={basket} />);
        expect(wrapper.find('.btn-checkout')).to.have.length(1);
    });
});