import React from "react";
import {router} from "../../router/router";
import {ProtectedRoute} from "../../router/ProtectedRoute";
import {Route, Switch} from "react-router-dom";
import {SignIn} from "../signIn/SignIn";
import {SignUp} from "../signUp/SignUp";

export const App = () => {
    return (
        <>
            <Switch>
                <Route render={() => <SignIn/>} path={'/sign-in'}/>
                <Route render={() => <SignUp/>} path={'/sign-up'}/>
                {router.map(elem => <ProtectedRoute key={elem} {...elem}/>)}
                <Route render={() => <div>404</div>}/>
            </Switch>
        </>
    )
};