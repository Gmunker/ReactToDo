import expect from 'expect';

import TodoAPI from 'TodoAPI';

describe('TodoAPI', () => {
  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    beforeEach(() => {
      localStorage.removeItem('todos');
    });

    it('should set valid todos array', () => {
      const todos = [{
        id: 23,
        text: 'test all files',
        completed: false
      }];
      TodoAPI.setTodos(todos);

      let actualTodos = JSON.parse(localStorage.getItem('todos'));
      
      expect(actualTodos).toEqual(todos);
    });

    it('should not set invalid todos array', () => {
      const badTodos = {a: 'b'};

      TodoAPI.setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null);

    });
  });//describe setTodos

  describe('getTodos', () => {

    it('should return empty array for bad localstorage data', () => {
      let actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });

    it('should return todos when passed good data', () => {
      const todos = [{
        id: 23,
        text: 'test all files',
        completed: false
      }];
      localStorage.setItem('todos', JSON.stringify(todos));
      
      let actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual(todos);
    });
  });//describe getTodos

  describe('filterTodos', () => {
    const todos = [{
      id: 1,
      text: 'Some Test Text',
      completed: true
    },{
      id: 2,
      text: 'Some Test Text2',
      completed: false
    },{
      id: 3,
      text: 'Some Test Text3',
      completed: true
    }];

    it('should return all items if showCompleted is true', () => {
      let filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);  
    });

    it('should return 1 item if showCompleted is false', () => {
      let filteredTodos = TodoAPI.filterTodos(todos, false, '');
      expect(filteredTodos.length).toBe(1);  
    });

    it('should sort by completed status', () => {
      let filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos[0].completed).toBe(false);
    });

    it('should show all when no text is entered in search', () => {
      let filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });

    it('should return return only 1 todo when valid data is searched', () => {
      let filteredTodos = TodoAPI.filterTodos(todos, true, '3');
      expect(filteredTodos.length).toBe(1);
    })

  });//filterTodos

});//describe TodoAPI