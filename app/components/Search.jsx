import React from 'react';

var Search = React.createClass({
  handleSearch() {
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value;

    this.props.onSearch(showCompleted, searchText);

  },

  render() {
    return (
      <div>
        <div>
          <input type="search" ref="searchText" placeholder="Search Todo's" onChange={this.handleSearch} />
        </div>
        <div>
          <label>
             <input type="checkbox" ref="showCompleted" onChange={this.handleSearch} />
             Show Completed Todos
          </label>
        </div>
      </div>
    )
  }
});

module.exports = Search;