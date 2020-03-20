import {Redirect, Route} from "react-router-dom";
import React from "react";
import {Auth} from "../../helpers/auth/Auth";

export const ProtectedRoute = ({component: Component, auth, ...rest}) => (
    Auth.isAuthorized() && rest.available === true
        ? <Redirect to='/'/>
        : <Route {...rest} render={(props) => (
            Auth.isAuthorized()
                ? <Component {...props} />
                : <Redirect to='/sign-in'/>
        )}/>
);