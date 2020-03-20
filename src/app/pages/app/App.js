import React from "react";
import {Header} from "./header/Header";
import {PopUp} from "../popUp/PopUp";
import {useForm} from "../../../helpers/hooks/useForm";
import {router} from "../../router/router";
import {ProtectedRoute} from "../../router/ProtectedRoute";
import {Route, Switch} from "react-router-dom";

export const App = () => {
    const {success, togglePopUp} = useForm(false);
    return (
        <>
            <Header/>
            <Switch>
                {router.map(elem => <ProtectedRoute key={elem} {...elem}/>)}
                <Route render={() => <div>404</div>}/>
            </Switch>
            {success && <PopUp
                onClick={togglePopUp}
                header={'Welcome to Loop!'}
                text={'Your group administrator has verified your account! Enjoy our platform!'}
            />}
        </>
    )
};