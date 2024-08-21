import { Component } from "react";

import TodoItems from "../TodoItems";

import "./index.css";

const initialTodosList = [
  {
    id: 1,
    title: "Book the ticket for today evening",
  },
  {
    id: 2,
    title: "Rent the movie for tomorrow movie night",
  },
  {
    id: 3,
    title: "Confirm the slot for the yoga session tomorrow morning",
  },
  {
    id: 4,
    title: "Drop the parcel at Bloomingdale",
  },
  {
    id: 5,
    title: "Order fruits on Big Basket",
  },
  {
    id: 6,
    title: "Fix the production issue",
  },
  {
    id: 7,
    title: "Confirm my slot for Saturday Night",
  },
  {
    id: 8,
    title: "Get essentials for Sunday car wash",
  },
];

class SimpleTodo extends Component {
  state = {
    todolist: initialTodosList,
  };

  deleteTodoItem = (id) => {
    const { todolist } = this.state;
    const updatedTodosList = todolist.filter((eachid) => eachid.id !== id);
    this.setState({ todolist: updatedTodosList });
  };

  render() {
    const { todolist } = this.state;
    return (
      <div className="todo-container">
        <div className="todolist-container">
          <h1 className="heading">Simple Todo List</h1>
          <ul className="ul-class">
            {todolist.map((eachitem) => (
              <TodoItems
                key={eachitem.id}
                deleteTodoItem={this.deleteTodoItem}
                todolist={eachitem}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default SimpleTodo;
