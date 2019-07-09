import React from "react";
import { useAuth0 } from "../../react-auth0-wrapper";
import { Link } from "react-router-dom";
import "./style.css";


const NavBar = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">

            {!isAuthenticated && (
                <button type="button mr-auto" className="btn btn-success"
                    onClick={() =>
                        loginWithRedirect({
                            redirect_uri: window.location.origin
                        })
                    }>
                    <a className="navbar-brand">Login</a>
                </button>
            )}

            {isAuthenticated && <button type="button" className="btn btn-success"
                onClick={() => console.log("This should load top 30")}>
                <a className="navbar-brand">Top 30</a>
            </button>}

            {isAuthenticated && <button type="button" className="btn btn-success"
                onClick={() => console.log("This should load portfolios")}>
                <a className="navbar-brand">Portfolios</a>
            </button>}

            {isAuthenticated && <button type="button" className="btn btn-success"
                onClick={() => logout()}>

                <a class="navbar-brand">Log Out</a>
            </button>}

            {isAuthenticated && <button type="button" class="btn btn-success"
                //Something needs to happen with the onClick below
                onClick={() => console.log("Hello World")}>
                <a class="navbar-brand">View Top 30 List</a>
            </button>}

            {isAuthenticated && <button type="button" class="btn btn-success"
                //Something needs to happen with the onClick below
                onClick={() => console.log("Hello World")}>
                <a class="navbar-brand">View Portfolios</a>
            </button>}

            {isAuthenticated && (
                <span>
                    <Link to="/">Home</Link>
                    <Link to="/profile">Profile</Link>
                    <Link to="/external-api">External API</Link>
                </span>
            )}
            

        </nav >
    );
};

export default NavBar;