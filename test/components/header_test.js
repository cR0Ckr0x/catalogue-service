import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { Header } from '../../src/components/header';

describe('<Header! />', () => {
    let component;
    let componentAuth;
    beforeEach(()=>{
        component = shallow(<Header authenticated={false} />);
        componentAuth = shallow(<Header authenticated={true} />);
    });

    it("calls the authentication function when the user clicks the Login button", () => {
        const onButtonClick = sinon.spy();
        let callCount = 0;
        const wrapper = shallow(
            <Header authenticate={onButtonClick} />
        );
        wrapper.find('button').simulate('click');
        expect(onButtonClick).to.have.property('callCount', 1);
    });

    describe('Navigation', () => {
        it("always shows a Home button", () => {
            expect(component.find("#link-home")).to.have.length(1);
            expect(componentAuth.find("#link-home")).to.have.length(1);
        });
        it("always shows a Login/Logout button", () => {
            expect(component.find("#link-loginbtn")).to.have.length(1);
            expect(componentAuth.find("#link-loginbtn")).to.have.length(1);
        });
        it("Doesn't show a link to the Catalogue when user is NOT logged in", () => {
            expect(component.find("#link-catalogue")).to.have.length(0);
        });
        it("shows a link to the Catalogue when user is logged in", () => {
            expect(componentAuth.find("#link-catalogue")).to.have.length(1);
        });
        it("Doesn't show a link to the Profile when user is NOT logged in", () => {
            expect(component.find("#link-catalogue")).to.have.length(0);
        });
        it("shows a link to the Profile when user is logged in", () => {
            expect(componentAuth.find("#link-catalogue")).to.have.length(1);
        });
    });

});