// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from "react";
import ReactDOM from "react-dom";
import api from "eodhistoricaldata-api";
import "./styles.css";

class Eodhistoricaldata extends React.Component {
  state = { data: [] };

  componentDidMount() {
    api.getFundamentals("WMT").then(data =>
      this.setState({ data }, () => {
        const findEbit = this.state.data.Financials.Income_Statement.quarterly;
        const dates = [];
        const entValues = [];
        //for every key (the quarterly dates)
        for (const key in findEbit) {
          dates.push(key);
          entValues.push([findEbit[key].ebit]);
        }

        const xyz = dates.slice(0, 4);
        const EV = entValues.slice(0, 4);
        console.log(EV);
        console.log(xyz);
      })
    );
  }
  findDate() {}
  render() {
    if (this.state.data.length === 0) {
      return "Loading data from eodhistoricaldata.com...";
    }

    return (
      <pre>
        {JSON.stringify(
          this.state.data.Financials.Income_Statement,
          null,
          1
        )}
      </pre>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Eodhistoricaldata />, rootElement);
