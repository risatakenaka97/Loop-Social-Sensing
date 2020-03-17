import React from "react";
import {Switch} from "react-router-dom";
import {router} from './router';
import {Route} from "./Route";

export const Routes = () => {
    return (
        <Switch>
            {router.map(elem => <Route key={elem} {...elem}/>)}
        </Switch>
    );
};