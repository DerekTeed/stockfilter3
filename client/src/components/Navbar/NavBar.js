import React from "react";
import { useAuth0 } from "../../react-auth0-wrapper";
import { Link } from "react-router-dom";
import "./style.css";

const divStyle = {
    opacity: 0.8,
};

const NavBar = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark" style={divStyle}>

            {!isAuthenticated && (
                <button type="button mr-auto" className="btn btn-success"
                    onClick={() =>
                        loginWithRedirect({
                            redirect_uri: window.location.origin
                        })
                    }>
                    Login
                </button>
            )}

            {/* {isAuthenticated && <button type="button" className="btn btn-success"
                onClick={() => console.log("This should load top 30")}>
                <a className="navbar-brand">Top 30</a>
            </button>} */}

            {/* {isAuthenticated && <button type="button" className="btn btn-success"
                onClick={() => console.log("This should load portfolios")}>
                <a className="navbar-brand">Portfolios</a>
            </button>} */}

            {isAuthenticated && <button type="button" className="btn btn-success"
                onClick={() => logout()}>
                Log Out
            </button>}

            {/* {isAuthenticated && <button type="button" className="btn btn-success"
                //Something needs to happen with the onClick below
                onClick={() => console.log("Hello World")}>
                <a className="navbar-brand">View Top 30 List</a>
            </button>} */}

            {/* {isAuthenticated && <button type="button" className="btn btn-success"
                //Something needs to happen with the onClick below
                onClick={() => console.log("Hello World")}>
                <a className="navbar-brand">View Portfolios</a>
            </button>} */}

            {isAuthenticated && (
                <span>
                    <button type="button" className="btn btn-success"><Link to="/home">Top Stocks</Link></button>
                    <button type="button" className="btn btn-success"><Link to="/profile">Profile</Link></button>
                    <button type="button" className="btn btn-success"><Link to="/external-api">External API</Link></button>
                </span>
            )}

        </nav >
    );
};

export default NavBar;