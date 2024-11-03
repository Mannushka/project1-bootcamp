import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
export default class UserInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.inputValue) {
      this.props.addItem(this.state.inputValue.toLowerCase());
      this.setState({
        inputValue: "",
      });
    }
  };

  render() {
    return (
      <div>
        <Container className="col-12 col-lg-11 text-center">
          <InputGroup id="main-input-field" className="mb-3 mt-4">
            <Form.Control
              placeholder="type in your item"
              aria-label="type in your item"
              aria-describedby="basic-addon1"
              onChange={this.handleChange}
              value={this.state.inputValue}
            />

            <Button
              variant="outline-secondary"
              id="add-item-button"
              onClick={this.handleSubmit}
            >
              Add item
            </Button>
          </InputGroup>
        </Container>
      </div>
    );
  }
}
