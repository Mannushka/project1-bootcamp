import React from "react";
import UserInput from "./UserInput";
import { Button } from "react-bootstrap";
import Item from "./Item";

export default class ItemsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsList: [],
    };
  }

  addItem = (inputValue) => {
    const newItem = { name: inputValue, key: Date.now(), isChecked: false };
    const newItemsList = [...this.state.itemsList, newItem];
    this.setState({ itemsList: newItemsList });
    localStorage.setItem("itemsList", JSON.stringify(newItemsList));
  };

  deleteItem = (index) => {
    const itemsList = [...this.state.itemsList];
    itemsList.splice(index, 1);
    this.setState({ itemsList: itemsList });
    localStorage.setItem("itemsList", JSON.stringify(itemsList));
  };

  updateItem = (name, key) => {
    const itemsList = [...this.state.itemsList];
    const newItemsList = itemsList.map((item) => {
      if (item.key === key) {
        item.name = name;
      }
      return item;
    });
    this.setState({ itemsList: newItemsList });
    localStorage.setItem("itemsList", JSON.stringify(itemsList));
  };

  checkItem = (key) => {
    const itemsList = [...this.state.itemsList];
    const newItemsList = itemsList.map((item) => {
      if (item.key === key) {
        item.isChecked = !item.isChecked;
      }
      return item;
    });
    this.setState({ itemsList: newItemsList });
    localStorage.setItem("itemsList", JSON.stringify(itemsList));
  };

  deleteAllItems = () => {
    localStorage.removeItem("itemsList");
    this.setState({ itemsList: [] });
  };

  componentDidMount() {
    const itemsList = localStorage.getItem("itemsList");
    if (itemsList) {
      this.setState({
        itemsList: JSON.parse(itemsList),
      });
    }
  }

  render() {
    return (
      <div>
        <div>
          <UserInput addItem={this.addItem} />
        </div>
        <div>
          {this.state.itemsList.map((item, key) => (
            <Item
              key={key}
              id={item.key}
              name={item.name}
              isChecked={item.isChecked}
              checkItem={this.checkItem}
              updateItem={this.updateItem}
              deleteItem={() => this.deleteItem(key)}
            />
          ))}
        </div>
        <div className="text-center">
          {this.state.itemsList.length > 0 && (
            <Button
              className="mt-3"
              variant="btn btn-dark"
              id="clear-all-button"
              onClick={this.deleteAllItems}
            >
              Clear all
            </Button>
          )}
        </div>
      </div>
    );
  }
}
