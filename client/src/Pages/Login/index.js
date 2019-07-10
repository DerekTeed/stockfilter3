import React, { Component } from "react";
// import Jumbotron from "../../components/Jumbotron/Jumbotron.js";
// import { useAuth0 } from "../../react-auth0-wrapper";
import Top30 from "../../components/Top30/Top30";
// import { Auth0Provider } from "../../react-auth0-wrapper";
import API from "../../utils/API";
// import axios from "axios";
import { Col, Row, Container } from "../../components/Grid";

class Login extends Component {

    state = {
        data: [],

    };

    componentDidMount() {
        this.loadStocks();
    }

    loadStocks = () => {
        API.getTop10()
            .then(res => res.data)
            .then(
                data => this.setState({
                    data
                })
            )
            .catch(() =>
                this.setState({
                    data: [],
                    message: "No Stocks Found"
                })
            );
    };

    // componentDidMount() {
    //     // when component mounted, start a GET request
    //     // to specified URL
    //     axios.get("/api/top10")
    //         .then(response => response.data) 
    //         .then(data => this.setState({ data }));
    // }


    // render() {
    //     return (
    //         <ul>
    //             {
    //                 this.state.data.map(function (stock) {
    //                     return <li key={stock.id}>{stock.id} - {stock.companyName}</li>;
    //                 })
    //             }
    //         </ul>
    //     );
    // }

    render() {

        return (
            <Container>
                <Row>
                    <Col size="md-6">
                        {this.state.data.map(stock => (
                            <Top30

                                name={stock.companyName}
                                price={stock.stockPrice}
                                ebit={stock.finalRatioEvEbit}
                            />
                        ))};

                    </Col>
                </Row>
            </Container>
        );


    }
}

export default Login;