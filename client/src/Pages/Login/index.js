import React from "react";
import Jumbotron from "../../components/Jumbotron/Jumbotron.js";
import { useAuth0 } from "../../react-auth0-wrapper";
import Top30 from "../../components/Top30/Top30";

const Login = () => {
    const { isAuthenticated } = useAuth0();
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