import {Route as ReactRoute} from "react-router-dom";
import React from "react";

export const Route = ({exact, path, component}) => {
    return (
        <>
            {
                exact ? (
                    <ReactRoute exact path={path}>
                        {component}
                    </ReactRoute>) : (
                    <ReactRoute path={path}>
                        {component}
                    </ReactRoute>)
            }
        </>
    );
};