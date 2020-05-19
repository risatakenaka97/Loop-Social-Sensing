import {Redirect, Route} from "react-router-dom";
import React from "react";
import {Auth} from "../../helpers/auth/Auth";

export const ProtectedRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
        Auth.isAuthorized()
            ? <Component {...props} />
            : <Redirect to='/sign-in'/>
    )}/>
);