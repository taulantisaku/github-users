import { Component } from "react";
import ListUsers from "./components/ListUsers";
import staticUsers from "./staticUsers";
//styles
import "./App.css";

class App extends Component {
  state = {
    staticUsers: staticUsers,
  };

  handleOnDelete = (userId) => {
    this.setState({
      staticUsers: this.state.staticUsers.filter((user) => user.id !== userId),
    });
  };

  render() {
    const { staticUsers } = this.state;
    return (
      <div className="App">
        <ListUsers title="Github Users" users={[]} />
        <ListUsers
          title="Static Users"
          users={staticUsers}
          onDelete={this.handleOnDelete}
        />
        <ListUsers title="Empty list" users={[]} />
      </div>
    );
  }
}

export default App;
