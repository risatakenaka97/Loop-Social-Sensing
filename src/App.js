import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import {Routes} from "./components/router/Routes";

function App() {
  return (
      <Router>
        <Routes/>
      </Router>
  );
}

export default App;
