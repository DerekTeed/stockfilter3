import React from "react";
import { useAuth0 } from "../../react-auth0-wrapper";
import { Link } from "react-router-dom";


const NavBar = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <div>
            {!isAuthenticated && (
                <button
                    onClick={() =>
                        loginWithRedirect({
                            redirect_uri: window.location.origin
                        })
                    }
                >
                    Log in
        </button>
            )}

            {isAuthenticated && (
                <span>
                    <Link to="/">Home</Link>&nbsp;
        <Link to="/profile">Profile</Link>
                </span>
            )}

            {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
        </div>
    );
};

export default NavBar;