import React from 'react';

// Task: Convert the following class component to a functional component.

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      inputText: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({ inputText: event.target.value });
  };

  addTodo = () => {
    const { inputText, todos } = this.state;
    if (!inputText.trim()) return;
    const newTodo = { id: Date.now(), text: inputText, completed: false };
    this.setState({
      todos: [...todos, newTodo],
      inputText: ''
    });
  };

  markTodoAsDone = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    });
  };

  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id)
    });
  };

  render() {
    const { todos, inputText } = this.state;
    return (
      <div>
        <input
          type="text"
          value={inputText}
          onChange={this.handleInputChange}
        />
        <button onClick={this.addTodo} disabled={!inputText.trim()}>
          Add Todo
        </button>
        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                color: todo.completed ? 'green' : 'inherit',
              }}
            >
              {todo.text}
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => this.markTodoAsDone(todo.id)}
              />
              <button onClick={() => this.deleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Todo;
