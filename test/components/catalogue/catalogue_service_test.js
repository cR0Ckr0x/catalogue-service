import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { CatalogueService } from '../../../src/components/catalogue/catalogue_service';

describe('Catalogue View', () => {
    let component;
    beforeEach(() => {
        component = shallow(<CatalogueService onSelectProduct={()=>{}} selectedProducts={[]} locationID={1} category={'Sports'} />);
    });

    it('renders the component correctly', () => {
        expect(component.find('.catalogueService-component')).to.have.length(1);
    });
    it('retrieves an array of data', () => {
        expect(component.instance().getData()).to.be.a('array');
    });
    it('show at least 1 product for any location and category provided', () => {
        expect(component.find('.single-product').length).to.be.above(0);
    });
});