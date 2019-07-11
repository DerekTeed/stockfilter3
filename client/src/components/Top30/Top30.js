import React from "react";

function Top30({ name, price, evEbit }) {
    return (
        <table className="table" >
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Stock Name</th>
                    <th scope="col">Stock Price</th>
                    <th scope="col">EvEbit Value</th>
                </tr>
            </thead>
            <tbody>

                <tr>
                    <td>
                        {name}
                    </td>
                    <td>
                        ${price}
                    </td>
                    <td>
                        {evEbit}
                    </td>

                </tr>

            </tbody>
        </table>
    )
};

export default Top30;