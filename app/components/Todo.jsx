import React from 'react';
var moment = require('moment');

var Todo = React.createClass({
  render() {
    var {id, text, completed, createdAt, completedAt} = this.props;
    let renderDate = () => {
      let message = 'Created: ';
      let timestamp = createdAt;

      if (completed) {
        message = 'Completed: ';
        timestamp = completedAt;
      }
      return message + moment.unix(timestamp).format('MMM Do, YYYY @ h:mm a');
    }

    return (
      <div onClick={ () => {
        this.props.onToggle(id);
      }}>
        <input type="checkbox" checked={completed} />
        <p>{text}</p>
        <p>{renderDate()}</p>
      </div>
    )
  }
});

module.exports = Todo;