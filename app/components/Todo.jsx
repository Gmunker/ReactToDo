import React from 'react';

var Todo = React.createClass({
  render() {
    var {id, text} = this.props;
    return (
      <h4>{id}. {text}</h4>
    )
  }
});

module.exports = Todo;