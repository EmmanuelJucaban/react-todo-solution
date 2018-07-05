import React, { Component } from 'react';
import Todo from './Todo';

export default class TodoList extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const todos = this.props.todos.slice();
    const renderTodos = function (todos) {
      return todos.map(todo => <Todo key={todo} task={todo}/>);
    };

    return (
      <div>
        <ul>
          {renderTodos(todos)}
        </ul>
      </div>
    );
  }
}