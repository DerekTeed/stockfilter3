import React, { Component } from "react";
// import Jumbotron from "../../components/Jumbotron/Jumbotron.js";
import Top30 from "../../components/Top30/Top30";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import Card from "../../components/Card";

class Home extends Component {

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
                    message: "Error! No Stocks Found!"
                })
            );
    };

    render() {

        return (
            <Container>
                <Row>
                    <Col size="md-6">
                        <Card title="Top Stocks" icon="chart-line">
                            {this.state.data.map(stock => (
                                <Top30
                                    name={stock.companyName}
                                    price={stock.stockPrice}
                                    evEbit={stock.finalRatioEvEbit}
                                />
                            ))}
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;