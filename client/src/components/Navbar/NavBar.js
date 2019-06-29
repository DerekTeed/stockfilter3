import React from "react";
import { useAuth0 } from "../../react-auth0-wrapper";
import { Link } from "react-router-dom";
import "./style.css";


const NavBar = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <div>
                {!isAuthenticated && (
                    <button type="button" class="btn btn-success"
                        onClick={() =>
                            loginWithRedirect({
                                redirect_uri: window.location.origin
                            })
                        }
                    >
                        <a class="navbar-brand">Sign Up/Login</a>
                    </button>
                )}

                {isAuthenticated && <button type="button" class="btn btn-success"
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
        <Link to="/">Home</Link>&nbsp;
        <Link to="/profile">Profile</Link>
      </span>
    )}
            </div>
        </nav>
    );
};

export default NavBar;