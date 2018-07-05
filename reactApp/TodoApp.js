import React, { Component } from 'react';
import TodoList from "./TodoList";

const dummyData= ["Do something", "Test something"];

export default class TodoApp extends Component {
  render() {
    return(
      <div>
        <TodoList todos={dummyData}/>
      </div>
    );
  }
}
