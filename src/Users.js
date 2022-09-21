import { Component } from "react";

class Users extends Component {
  state = {
    isLoading: true,
    users: [],
    error: "",
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          this.setState({
            isLoading: false,
            error: "Network error",
            users: [],
          });
          return [];
        }

        return res.json();
      })
      .then((jsonResponse) => {
        this.setState({
          isLoading: false,
          users: undefined, //jsonResponse
        });
      })
      .catch((e) => {
        console.log("catch", e);
      });
  }

  render() {
    console.log(this.state);
    const { error, isLoading, users } = this.state;
    return (
      <div>
        {isLoading ? (
          <h1>Loading users ...</h1>
        ) : (
          <div>
            {error ? (
              <div style={{ color: "red" }}>{error}</div>
            ) : (
              users.map((user) => <div key={user.id}>{user.name}</div>)
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Users;
