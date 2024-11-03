import React from "react";
import "./App.css";
import ItemsList from "./Components/ItemsList";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";

class App extends React.Component {
  render() {
    return (
      <div>
        <Container className="App mt-5 col-11 col-md-6 col-lg-5  align-items-center">
          <Stack gap={2}>
            <div className="header mt-4">My shopping list</div>
            <ItemsList />
          </Stack>
        </Container>
      </div>
    );
  }
}

export default App;
