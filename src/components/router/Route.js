import {Route as ReactRoute} from "react-router-dom";
import React from "react";

export const Route = ({exact, path, component}) => {
    return (
        <>
            {
                exact ?
                    (<ReactRoute exact path={path} render={() => component}/>) :
                    (<ReactRoute path={path}  render={() => component}/>)
            }
        </>
    );
};