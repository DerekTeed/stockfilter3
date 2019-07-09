import React from "react";



function Top30(props) {
    return (
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <table className="table" style={{width: "18rem"}}>
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Stock Name</th>
                            <th scope="col">Stock Price</th>
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
                                    <div className="input-group mb-3">
                                        <input name={stock.name} type="text" placeholder="Enter Shares" aria-label="Enter Shares" aria-describedby="basic-addon1" />
                                    </div>
                                    <button type="button" className="btn btn-success">Add</button>
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