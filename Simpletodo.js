import React, { Component } from 'react';

class Simpletodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: '',
    };
  }

  // Add a new todo
  addTodo = () => {
    if (this.state.newTodo.trim() !== '') {
      const newTodo = {
        id: Date.now(), // Unique ID
        text: this.state.newTodo,
        completed: false,
      };
      this.setState(prevState => ({
        todos: [...prevState.todos, newTodo],
        newTodo: '',
      }));
    }
  };

  // Delete a todo
  deleteTodo = (id) => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== id),
    }));
  };

  // Toggle todo completion
  toggleComplete = (id) => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };


  handleInputChange = (event) => {
    this.setState({ newTodo: event.target.value });
  };


  render() {
    const { todos, newTodo } = this.state;

    return (
      <div>
        <h1>Todo List</h1>
        <input
          type="text"
          value={newTodo}
          onChange={this.handleInputChange}
          placeholder="Add a new todo"
        />
        <button onClick={this.addTodo}>Add</button>
        <ul>
          {todos.map(todo => (
            <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => this.toggleComplete(todo.id)}
              />
              {todo.text}
              <button onClick={() => this.deleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Simpletodo;