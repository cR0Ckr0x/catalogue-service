import React from 'react';
import {Route} from "react-router-dom";

import App from './components/app';
import requireAuth from './components/authentication/require_authentication';
import Catalogue from "./components/catalogue/catalogue";
import Profile from "./components/profile/profile";
import BasketConfirmPage from "./components/basket/basket_confirm_page";
import Thanks from "./components/thanks";

export default (
    <App path="/">
        <Route path="/catalogue" component={requireAuth(Catalogue)} />
        <Route path="/profile" component={requireAuth(Profile)} />
        <Route path="/basket/confirm" component={requireAuth(BasketConfirmPage)} />
        <Route path="/thanks" component={requireAuth(Thanks)} />
    </App>
);