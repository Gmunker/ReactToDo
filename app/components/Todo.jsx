var React = require('react');

var Todo = React.createClass({
  render: function() {
    var {id, text} = this.props;
    return (
      <h3>{id}. {text}</h3>
    )
  }
});

module.exports = Todo;