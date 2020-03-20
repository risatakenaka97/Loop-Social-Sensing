import {Redirect, Route} from "react-router-dom";
import React from "react";
import {Auth} from "../../helpers/auth/Auth";

export const AvailableRoute = ({component: Component, ...rest}) => (
    Auth.isAuthorized()
        ? <Redirect to='/'/>
        : <Route {...rest} render={props => <Component {...props}/>}/>
);