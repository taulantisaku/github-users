import { Component } from "react";
import ListUsers from "./components/ListUsers";
import staticUsers from "./staticUsers";
import AddUserForm from "./components/AddUserForm";
import axios from "axios";
//styles
import "./App.css";

class App extends Component {
  state = {
    staticUsers: staticUsers,
    githubUsers: [],
  };

  handleOnDelete = (userId) => {
    this.setState({
      staticUsers: this.state.staticUsers.filter((user) => user.id !== userId),
    });
  };

  handleOnSubmit = async (username) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      const user = response.data;

      this.setState({
        ...this.state,
        githubUsers: [
          ...this.state.githubUsers,
          {
            id: user.id,
            name: user.name,
            avatar_url: user.avatar_url,
            login: user.login,
          },
        ],
      });
    } catch (e) {}
  };

  render() {
    const { staticUsers, githubUsers } = this.state;
    return (
      <div className="App">
        <AddUserForm onSubmit={this.handleOnSubmit} />
        <ListUsers title="Github Users" users={githubUsers} onDelete={this.handleOnDelete} />
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
