import React from "react";
import {Route, Switch} from "react-router-dom";
import {router} from './router';
import {AvailableRoute} from "./AvailableRoute";
import {ProtectedRoute} from "./ProtectedRoute";

export const Routes = () => (
    <Switch>
        {router.map(elem => elem.available
            ? <AvailableRoute key={elem} {...elem}/>
            : <ProtectedRoute key={elem} {...elem}/>)}
        <Route render={() => <div>404</div>}/>
    </Switch>
);