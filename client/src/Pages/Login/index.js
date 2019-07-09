import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron/Jumbotron.js";
import { useAuth0 } from "../../react-auth0-wrapper";
import Top30 from "../../components/Top30/Top30";
import { Auth0Provider } from "../../react-auth0-wrapper";
import api from "../../api.js";

class Login extends Component {
    state = {

    };

    componentWillMount() {
        // api.getTop30()
        //     .then(res => this.setState({top30: res}))
        //     .then(console.log(this.state.top30)) 
        this.setState({ top30: api.getTop30() });
    }

    render() {

        return (
            <div>
                {/* {Auth0Provider.isAuthenticated ?
                    <Top30 
                    top30 = {this.state.top30}
                    /> :
                    <Jumbotron />
                } */}
                <Top30
                    top30={this.state.top30}
                /> :
            </div>
        );
    };
};


// const Login = () => {
//     const { isAuthenticated } = useAuth0();
//     return (
//         <div>
//         {isAuthenticated ?
//             <Top30 /> :
//             <Jumbotron />
//         }
//         </div>
//     );
// }

export default Login;