import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import Search from 'Search';

describe('Search', () => {
  it('should exist', () => {
    expect(Search).toExist();
  });

  it('should call onSearch with entered input text', () => {
    var searchText = "dog";
    var spy = expect.createSpy();
    var search = TestUtils.renderIntoDocument(<Search onSearch={spy}/>);

    search.refs.searchText.value = searchText;
    TestUtils.Simulate.change(search.refs.searchText);

    expect(spy).toHaveBeenCalledWith(false, 'dog');
  });

  it('should call onSearch with proper check value', () => {
    var spy = expect.createSpy();
    var search = TestUtils.renderIntoDocument(<Search onSearch={spy}/>);

    search.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(search.refs.searchText);

    expect(spy).toHaveBeenCalledWith(true, '');
  });
});