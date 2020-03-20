import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {Routes as SignIn} from "./app/router/Routes";
import {Auth} from "./helpers/auth/Auth";
import {App as Application} from './app/pages/app/App';

const App = () => (
    <Router>
        {Auth.isAuthorized() ? <Application/> : <SignIn/>}
    </Router>
);

export default App;
