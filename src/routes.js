import React from 'react';
import {Route} from "react-router-dom";

import App from './components/app';
import requireAuth from './components/authentication/require_authentication';
import Catalogue from "./components/catalogue/catalogue";
import Profile from "./components/profile/profile";

export default (
    <App path="/">
        <Route path="/catalogue" component={requireAuth(Catalogue)} />
        <Route path="/profile" component={requireAuth(Profile)} />
    </App>
);