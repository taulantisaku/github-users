import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <>
        {this.props.render({
          value: this.state.count,
          increment: this.increment,
          decrement: this.decrement,
        })}
      </>
    );
  }
}
