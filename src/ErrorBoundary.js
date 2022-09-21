import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  state = {
    error: "",
  };

  componentDidCatch(error, errorInfo) {
    console.log(error.message);
    console.log(errorInfo);

    this.setState({
      error: errorInfo,
    });
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          Something went wrong!
          <button onClick={() => window.location.reload()}>
            Please refresh!
          </button>
        </div>
      );
    }

    return <>{this.props.children}</>;
  }
}
