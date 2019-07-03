import React from "react";
import "./style.css";

export function Top30() {
    return (
        <div className="card" style={{ width: "40rem" }}>
            <div className="card-header">
                <h3>Top 30</h3>
            </div>
            <table className="table">
                <thead class="thead-success">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Stock Name</th>
                        <th scope="col">Stock Amount</th>
                        <th scope="col">Add</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Stock 1</td>
                        <td>
                        <input type="text" class="form-control" aria-describedby="basic-addon1" style={{ width: "5rem"}}/>
                        </td>
                        <td>
                        <button type="button" class="btn btn-success"
                        onClick={() => console.log("This should add stock to portfolio")}>
                            Add Stock</button>
                        </td>
                    </tr>

                </tbody>
            </table>


            {/* <ul className="list-group list-group-flush">
                <li className="list-group-item">Stock 1
                <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">Enter Quantity</span>
                        </div>
                        <input type="text" class="form-control" aria-describedby="basic-addon1" />
                        <button type="button" class="btn btn-success">Add Stock</button>
                    </div>
                </li>
                <li className="list-group-item">Stock 2
                <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">Enter Quantity</span>
                        </div>
                        <input type="text" class="form-control" aria-describedby="basic-addon1" />
                        <button type="button" class="btn btn-success">Add Stock</button>
                    </div>
                </li>
                <li className="list-group-item">Stock 3
                <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">Enter Quantity</span>
                        </div>
                        <input type="text" class="form-control" aria-describedby="basic-addon1" />
                        <button type="button" class="btn btn-success">Add Stock</button>
                    </div>
                </li>
            </ul> */}
        </div>
    );
}

export default Top30;

// export function List({children}) {
//     return (
//         <div className="list-overflow-container">
//           <ul className="list-group">{children}</ul>
//         </div>
//       );
//     }

//     export function ListItem({ children }) {
//       return <li className="list-group-item">{children}</li>;
//     }