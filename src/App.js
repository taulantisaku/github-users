import { Component } from "react";
import Message from "./components/Message";
import Button from "./components/Button";
// import { Button } from "./components/StyledComponents";
//styles
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Message text="Styled component message from App" />
        {/* <Button color="green">Save</Button>
        <Button color="red">Delete</Button>
        <Button color="black">Save</Button>
        <Button color="pink">Save</Button>
        <Button>white</Button> */}

        <Button color="red" onClick={() => alert("this button works!")}>
          Click me!
        </Button>
      </div>
    );
  }
}

export default App;
