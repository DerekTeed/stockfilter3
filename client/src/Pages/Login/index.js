import Jumbotron from "../../components/Jumbotron/Jumbotron.js";
import React from "react";
import { useAuth0 } from "../../react-auth0-wrapper";
import Form from "../../components/Form/Form.js"
import Top30 from "../../components/Top30/Top30.js"

const Login = () => {
    const { isAuthenticated, loginWithRedirect } = useAuth0();
    return (
        <div>
            {isAuthenticated ?
                <Top30 /> :
                <Jumbotron />
            }
        </div>
    );
}

export default Login;