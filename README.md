# Rocket Academy Coding Bootcamp: Project 1: Frontend App

https://bc.rocketacademy.co/1-frontend/1.p-frontend-app

# My shopping list app

This is a shopping list app that allows users to create, edit and delete a shopping list.
In this app, users can:

1. add new items to the list
2. edit an exsisting item on the list in case there is typo
3. cross out the item that has been purchased
4. delete an item from the list
5. clear the entire list, i.e. delete all items, in one click

## How to use the app:

1. Adding items: type the name of your item into the input field and click "Add item" button.
2. Editing items: click the item you wish to edit and type in the new name.
3. Cross items out: tick the checkbox next to the item.
4. Deleting items: click the trashbin icon next to the item.
5. Removing all items: click "Clear all" button.

All items are stored in the local storage, so when users refresh the page, they are still able to see the items they added/eddited previously.
However, upon clicking "Clear all" button, all items get erased from local storage. After the button has been clicked, if the user refreshes the page, the list will be empty.

## Requirements

To install and launch the app, you will need NodeJS v16+

## Dependencies:

1. React
2. React-DOM
3. React-bootstrap
4. Bootstrap
5. React-icons
6. React-scripts

## Installation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). In the project directory, you can run:

### `npm install`

to install all required dependencies

### `npm start`

to run the app in the development mode.

Then open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Deployment link

The project is deployed on Git Hub Pages at https://mannushka.github.io/project1-bootcamp/
