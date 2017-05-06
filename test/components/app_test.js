import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import App from '../../src/components/app';
import Header from '../../src/components/header';

describe('<App />', () => {
    let component;
    beforeEach(() => {
        component = shallow(<App/>);
    });

    it('renders main <App /> component', () => {
        expect(component).to.have.length(1);
    });

    it('renders <Header /> component', () => {
        expect(component.find(Header)).to.have.length(1);
    });
});