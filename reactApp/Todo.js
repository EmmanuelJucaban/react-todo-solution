import React, { Component } from 'react';

export default props => {
  return (
    <div>
      <button>X</button>
      <li>{props.task}</li>
    </div>
  )
}