import React from "react";

export function Portfolios() {
    return (
    <div className="card" style="width: 18rem;">
        <div className="card-body">
            <h5 className="card-title">Portfolio</h5>
            <ul className="list-group list-group-flush">
                {/* Stocks will get listed here */}
                <li className="list-group-item">Stock 1</li>
                <li className="list-group-item">Stock 2</li>
                <li className="list-group-item">Stock 3</li>
            </ul>
        </div>
        <button type="button" class="btn btn-success">Add</button>
    </div>
    );
}

export default Portfolios;