import React, { Component } from "react";



function Top30(props) {
    return (
        <div class="card" style={{width: "18rem"}}>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Stock Name</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Add</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr>
                            <th scope="row">1</th>
                            <td>Example Stock</td>
                            <td>Example Amount</td>
                            <td>Add</td>
                        </tr> */}
                        {props.top30.map(stock => (
                            <tr>
                                <td>
                                    {stock.name}
                                </td>
                                <td>
                                    {stock.price}
                                </td>
                                <td>
                                    <div class="input-group mb-3">
                                        <input name={stock.name} type="text" placeholder="Enter Shares" aria-label="Enter Shares" aria-describedby="basic-addon1" />
                                    </div>
                                    <button type="button" class="btn btn-success">Add</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
};


export default Top30;