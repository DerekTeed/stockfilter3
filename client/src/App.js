import React from 'react';
import NavBar from "./components/Navbar/NavBar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Body from "./components/Body/Body";
// import Card30 from "./components/Card30/Card30";
// import Profs from "./components/Profs/Profs";
import Input from "./components/Input/Input";

// import the React Router components, and the Profile page component
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";

// import the PrivateRoute component
import PrivateRoute from "./components/PrivateRoute";


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
          <Route path="/" exact />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
              <Jumbotron />
              <Body />
              {/* <Card30 /> */}
              <Input />
    </div >
  );
}

export default App;
