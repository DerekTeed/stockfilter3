import Jumbotron from "../../components/Jumbotron/Jumbotron.js";
import React from "react";
import { useAuth0 } from "../../react-auth0-wrapper";
import Form from "../../components/Form/Form.js"

const Login = () => {
    const { isAuthenticated, loginWithRedirect } = useAuth0();
    return (
        <div>
        {isAuthenticated ?
            <Form /> :
            <Jumbotron />
        }
        </div>
    );
}

export default Login;