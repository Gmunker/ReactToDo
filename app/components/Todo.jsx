var React = require('react');

var Todo = React.createClass({
  render: function() {
    var {id, text} = this.props;
    return (
      <h4>{id}. {text}</h4>
    )
  }
});

module.exports = Todo;