import React from "react";
import { useAuth0 } from "../../react-auth0-wrapper";
import { Link } from "react-router-dom";


const NavBar = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div>
                {!isAuthenticated && (
                    <button type="button" className="btn btn-success"
                        onClick={() =>
                            loginWithRedirect({
                                redirect_uri: window.location.origin
                            })
                        }
                    >
                        <a className="navbar-brand">Sign Up/Login</a>
                    </button>
                )}

                {isAuthenticated && <button type="button" className="btn btn-success"
                onClick={() => logout()}>
                <a className="navbar-brand">Log Out</a>
                </button>}
            </div>
        </nav>
    );
};

export default NavBar;