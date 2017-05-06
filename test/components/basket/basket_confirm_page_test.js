import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { BasketConfirmPage } from '../../../src/components/basket/basket_confirm_page';

describe('Basket Confirm Page View', () => {
    let component;
    beforeEach(() => {
        const basket = { selectedProducts: [] };
        component = shallow(<BasketConfirmPage basket={basket} />);
    });

    it('renders the component correctly', () => {
        expect(component.find('.basketConfirmPage-component')).to.have.length(1);
    });
    it("empties the basket when the user confirms his order", () => {
        const onButtonClick = sinon.spy();
        let callCount = 0;
        const basket = { selectedProducts: [{product:'a', id:'b'}] };
        const wrapper = shallow(
            <BasketConfirmPage emptyBasket={onButtonClick} basket={basket} />
        );
        wrapper.find('.btn-confirm').simulate('click');
        expect(onButtonClick).to.have.property('callCount', 1);
    });
});