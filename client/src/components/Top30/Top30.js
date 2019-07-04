import React, { Component } from "react";

class Top30 extends Component {
    // Setting the component's initial state
    state = {
        stockName: "",
        stockAmount: "",
        stockPrice: ""
    };

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;

        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        if (!this.state.stockName || !this.state.stockAmount || !this.state.stockPrice) {
            alert("Fill out all the info!");
        }
        console.log(this.state);
        this.setState({
            stockName: "",
            stockAmount: "",
            stockPrice: ""
        });
    };

//     render() {
//         // Notice how each input has a `value`, `name`, and `onChange` prop
//         return (
//             <div>
//                 <form className="form">
//                     <input
//                         value={this.state.stockName}
//                         name="stockName"
//                         onChange={this.handleInputChange}
//                         type="text"
//                         placeholder="Company Name"
//                     />
//                     <input
//                         value={this.state.stockAmount}
//                         name="stockAmount"
//                         onChange={this.handleInputChange}
//                         type="text"
//                         placeholder="Stock Amount"
//                     />
//                     <input
//                         value={this.state.stockPrice}
//                         name="stockPrice"
//                         onChange={this.handleInputChange}
//                         type="text"
//                         placeholder="Stock Price"
//                     />
//                     <button onClick={this.handleFormSubmit}>Submit</button>
//                 </form>
//             </div>
//         );
//     }
// }

    render() {
    return (
        <div className="container">
            <div className="card" style={{ width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">Input Stock Info</h5>
                    <form className="form">
                        <div className="form-group">
                        <input
                            value={this.state.stockName}
                            name="stockName"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Company Name"
                        />
                        </div>
                        <div className="form-group">
                        <input
                            value={this.state.stockAmount}
                            name="stockAmount"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Stock Amount"
                        />
                        </div>
                        <div className="form-group">
                        <input
                            value={this.state.stockPrice}
                            name="stockPrice"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Stock Price"
                        />
                        </div>
                        <button onClick={this.handleFormSubmit}>Add</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
}

export default Top30; 