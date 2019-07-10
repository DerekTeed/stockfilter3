import React from "react";

function Top30({ name, price, ebit }) {
    return (
        <div className="card" style={{ width: "40rem" }}>
            <div className="card-body" >
                <h5 className="card-title">Top Stocks</h5>
                <table className="table" >
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Stock Name</th>
                            <th scope="col">Stock Price</th>
                            <th scope="col">Ebit Value</th>
                            {/* <th scope="col">Add</th> */}
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>
                                {name}
                            </td>
                            <td>
                                {price}
                            </td>
                            <td>
                                {ebit}
                            </td>
                            {/* <td>
                                    <div className="input-group mb-3">
                                        <input name={stock.name} type="text" placeholder="Enter Shares" aria-label="Enter Shares" aria-describedby="basic-addon1" />
                                    </div>
                                    <button type="button" className="btn btn-success">Add</button>
                                </td> */}
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default Top30;