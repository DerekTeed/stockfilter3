import React from "react";
import { useAuth0 } from "../../react-auth0-wrapper";

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
            </div>
        </nav>
    );
};

export default NavBar;