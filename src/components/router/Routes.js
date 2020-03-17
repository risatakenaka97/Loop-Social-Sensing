import React from "react";
import {Route, Switch} from "react-router-dom";
import {routes} from '../structure/routes';

const CustomRoute = ({exact, path, component}) => {
    return (
        <>
            {
                exact ? (
                    <Route exact path={path}>
                        {component}
                    </Route>) : (
                    <Route path={path}>
                        {component}
                    </Route>)
            }
        </>
    );
};

export const Routes = () => {
    return (
        <Switch>
            {routes.map(elem => <CustomRoute key={elem} {...elem}/>)}
        </Switch>
    );
};