import { Component } from "react";

import "./AddUserForm.css";
export default class AddUserForm extends Component {
  state = {
    searchValue: "",
  };

  handleOnChange = (e) => {
    this.setState({
      searchValue: e.target.value,
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchValue);
  };

  render() {
    return (
      <div className="AddUserForm">
        <form className="AddUserForm__form" onSubmit={this.handleOnSubmit}>
          <input
            placeholder="Search by username"
            name="searchValue"
            className="form-control"
            value={this.state.searchValue}
            onChange={this.handleOnChange}
          ></input>
          <button type="submit" className="btn btn-primary">
            {" "}
            Add
          </button>
        </form>
      </div>
    );
  }
}
