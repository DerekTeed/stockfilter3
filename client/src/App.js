import React from 'react';
import NavBar from "./components/Navbar/NavBar";
<<<<<<< HEAD
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Body from "./components/Body/Body";
// import Card30 from "./components/Card30/Card30";
// import Profs from "./components/Profs/Profs";
import Input from "./components/Input/Input";
=======
import Login from "./Pages/Login";
// import Body from "./components/Body/Body";
// import Form from "./components/Form/Form";
import "./style.css";
// import { useAuth0 } from "../../react-auth0-wrapper";
>>>>>>> 14ba2ac91a06a024dd132ca58136735e053bddb2

// import the React Router components, and the Profile page component
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";

// import the PrivateRoute component
import PrivateRoute from "./components/PrivateRoute";
import ExternalApi from "./components/ExternalApi";

// import logo from './logo.svg';
// import './App.css';

// default code

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

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
          <Route path="/" exact component={Login}/>
          <PrivateRoute path="/profile" component={Profile} />
          {/* NEW - add a route to the ExternalApi component */}
          <PrivateRoute path="/external-api" component={ExternalApi} />
        </Switch>
      </BrowserRouter>
<<<<<<< HEAD
              <Jumbotron />
              <Body />
              {/* <Card30 /> */}
              <Input />
=======
>>>>>>> 14ba2ac91a06a024dd132ca58136735e053bddb2
    </div >
  );
}

export default App;
