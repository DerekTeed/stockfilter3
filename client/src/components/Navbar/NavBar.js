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
                <a className="navbar-brand">Log Out</a>
            </button>}
            <span>
                <Link to="/">Home</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/external-api">External API</Link>
            </span>

        </nav>
    );
};

export default NavBar;