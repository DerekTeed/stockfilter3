import React from 'react';
import NavBar from "./components/Navbar/NavBar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Home from "./Pages/Home";
import "./style.css";

// import the React Router components, and the Profile page component
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";

// import the PrivateRoute component
import PrivateRoute from "./components/PrivateRoute";
import ExternalApi from "./components/ExternalApi";

// import logo from './logo.svg';
// import './App.css';

// auth0 code

function App() {
  return (
    <div className="App">
      {/* New - use BrowserRouter to provide access to /profile */}
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Switch>
          {/*route must have 'exact' parameter specified */}
          <Route path="/" exact component={Jumbotron} />

          <PrivateRoute path="/home" component={Home} />
          <PrivateRoute path="/profile" component={Profile} />
          {/* NEW - add a route to the ExternalApi component */}
          <PrivateRoute path="/external-api" component={ExternalApi} />
        </Switch>
      </BrowserRouter>
    </div >
  );
}

export default App;
