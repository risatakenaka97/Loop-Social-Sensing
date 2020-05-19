import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {App as Application} from './app/pages/app/App';
import {Header} from "./app/pages/app/header/Header";

const App = () => {
    return (
        <Router>
            <Header/>
            <Application/>
        </Router>
    )
};

export default App;
