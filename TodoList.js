import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, text: 'I am singing' },
        { id: 2, text: 'I am dancing' },
      ],
    };
  }

  deleteTodo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter(todo => todo.id !== id),
    }));
  };

  render() {
    return (
      <ul>
        {this.state.todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => this.deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }
}

export default TodoList;