import { Component } from "react";

import Counter from "./components/Counter";
//styles
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter
          render={({ value, increment, decrement }) => {
            return (
              <div>
                <button onClick={increment}>+ </button>
                <span>{value}</span>
                <button onClick={decrement}>-</button>
              </div>
            );
          }}
        />
        <Counter
          render={({ value, increment, decrement }) => {
            return (
              <div>
                <h1>{value}</h1>
                <button className="App_button2" onClick={increment}>
                  +
                </button>
                <button className="App_button2" onClick={decrement}>
                  -
                </button>
              </div>
            );
          }}
        />

        <Counter
          render={({ value, increment, decrement }) => {
            return (
              <div>
                <h1 onClick={increment} style={{ color: "red" }}>
                  {value}
                </h1>
              </div>
            );
          }}
        ></Counter>
      </div>
    );
  }
}

export default App;
