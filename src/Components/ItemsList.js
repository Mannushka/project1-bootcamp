import React from "react";
import UserInput from "./UserInput";
import Items from "./Items";
import { Button } from "react-bootstrap";

export default class ItemsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsList: [],
    };
  }
  //We need to be able to add items to the list
  //Items are added in the UserInput component: when user inputs something into the input field and then clicks "add item" , the item should get added into the itemsArray
  //Each item can be deleted
  //Each item can be changed
  //Each item can be edited
  //Each item has checkbox, once the user got the item, they may tick the checkbox and the item will get crossed out

  //1) adding items logic
  //this function is passed as props to UserInput
  addItem = (inputValue) => {
    let newItem = { name: " ", key: " ", isChecked: false };
    newItem.name = inputValue;
    newItem.key = Date.now();
    //suggested change: const newItem = { name: inputValue, key: Date.now(), isChecked: false }
    let newItemsList = [...this.state.itemsList, newItem]; // should be const
    this.setState({ itemsList: newItemsList });
    localStorage.setItem("itemsList", JSON.stringify(newItemsList));
  };

  //2) deleting items logic
  //this function is passed as props to Items
  deleteItem = (index) => {
    const itemsList = [...this.state.itemsList];
    itemsList.splice(index, 1);
    this.setState({ itemsList: itemsList });
    localStorage.setItem("itemsList", JSON.stringify(itemsList));
  };

  //3) editing items logic
  //this function is passed as props to Items
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

  //4) crossing items out logic
  //this function is passed as props to Items
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
  //5) logic to clear all items
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
          <Items
            itemsList={this.state.itemsList}
            checkItem={this.checkItem}
            updateItem={this.updateItem}
            deleteItem={this.deleteItem}
          />
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
