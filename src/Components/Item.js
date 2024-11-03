import React from "react";
import { BsTrash3Fill } from "react-icons/bs";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

class Item extends React.Component {
  handleCheckItem = () => {
    this.props.checkItem(this.props.id);
  };

  handleUpdateItem = (event) => {
    this.props.updateItem(event.target.value, this.props.id);
  };

  handleDeleteItem = () => {
    this.props.deleteItem(this.props.id);
  };

  render() {
    const { id, isChecked, name } = this.props;

    return (
      <Form>
        <Row className="align-items-center ms-1 me-1 ms-md-2 me-md-2 ms-lg-4 me-lg-4">
          <Col xs={1}>
            <Form.Check
              className="checkbox-input"
              type="checkbox"
              id={id}
              value={isChecked}
              checked={isChecked}
              onChange={this.handleCheckItem}
            />
          </Col>
          <Col xs={9}>
            <Form.Control
              className={isChecked ? "purchased-item-row" : "item-to-buy-row"}
              type="text"
              id={id}
              value={name}
              onChange={this.handleUpdateItem}
            />
          </Col>
          <Col xs={1} lg={2}>
            <BsTrash3Fill
              className="icons"
              id="trashbin"
              onClick={this.handleDeleteItem}
            />
          </Col>
        </Row>
      </Form>
    );
  }
}

export default Item;
