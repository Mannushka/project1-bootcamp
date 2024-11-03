//NO LONGER IN USE!!!//

import React from "react";
import { BsTrash3Fill } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
export default class Items extends React.Component {
  render() {
    const items = this.props.itemsList.map((item, key) => {
      return (
        <div key={item.key}>
          <Form>
            <Row className="align-items-center ms-1 me-1 ms-md-2 me-md-2 ms-lg-4 me-lg-4">
              <Col xs={1}>
                <Form.Check
                  className="checkbox-input"
                  type="checkbox"
                  id={item.key}
                  value={item.isChecked}
                  checked={item.isChecked}
                  onChange={() => this.props.checkItem(item.key)}
                />
              </Col>
              <Col xs={9}>
                <Form.Control
                  className={
                    item.isChecked ? "purchased-item-row" : "item-to-buy-row"
                  }
                  type="text"
                  id={item.key}
                  value={item.name}
                  onChange={(event) =>
                    this.props.updateItem(event.target.value, item.key)
                  }
                />
              </Col>
              <Col xs={1} lg={2}>
                <BsTrash3Fill
                  className="icons"
                  id="trashbin"
                  onClick={() => this.props.deleteItem(key)}
                />
              </Col>
            </Row>
          </Form>
        </div>
      );
    });

    return <div>{items}</div>;
  }
}
