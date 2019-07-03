import React from "react";
import Jumbotron from "../../components/Jumbotron/Jumbotron.js";
import { useAuth0 } from "../../react-auth0-wrapper";
<<<<<<< HEAD
import Form from "../../components/Form/Form.js"
import Top30 from "../../components/Top30/Top30.js"
=======
import Top30 from "../../components/Top30/Top30";
>>>>>>> fe5259b87dacdbd6d2379c82b08cea53e20cfd84

const Login = () => {
    const { isAuthenticated } = useAuth0();
    return (
        <div>
<<<<<<< HEAD
            {isAuthenticated ?
                <Top30 /> :
                <Jumbotron />
            }
=======
        {isAuthenticated ?
            <Top30 /> :
            <Jumbotron />
        }
>>>>>>> fe5259b87dacdbd6d2379c82b08cea53e20cfd84
        </div>
    );
}

export default Login;