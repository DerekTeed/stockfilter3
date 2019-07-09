import React from "react";

function Input(stockName, stockAmount, stockPrice) {
    return (
        <div className="card">
            <div className="card-header">
                Create Portfolio
            </div>
            <div className="card-body">
                <h4>Enter Stock Info</h4>
                <ul>
                    <li>
                        <div className="input-group mb-3">
                            <input className="form-control" type="text" placeholder="Company Name" {...stockName} />
                        </div>
                    </li>
                    <li>
                        <div className="input-group mb-3">
                            <input className="form-control" type="text" placeholder="Amount Purchased" {...stockAmount} />
                        </div>
                    </li>
                    <li>
                        <div className="input-group mb-3">
                            <input className="form-control" type="text" placeholder="Price" {...stockPrice} />
                        </div>
                    </li>
                </ul>
                <a href="#" class="btn btn-primary">Create</a>
            </div>
        </div>
    );
  }

export default Input;