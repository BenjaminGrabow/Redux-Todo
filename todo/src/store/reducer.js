import { ADD_TODO } from './actions';

const initialState = {
  todos: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = [...state.todos, action.payload];
      return  {...state, todos: newTodo} ;

    case 'CHANGE_TO_COMPLETED':
      const updateTodos = state.todos.map(todo => {
        if (todo.id === action.id) {
          todo.completed = true
        } return todo
      });
      return {todos: updateTodos};

    case 'DELETE_ITEMS':
      const updateTodoList = state.todos.filter(todo => !todo.completed);
      return {todos: updateTodoList};

    case 'SEARCH':
      const updateTheTodos = state.todos.filter(todo =>
        todo.todo.toLocaleLowerCase().startsWith(action.item.toLocaleLowerCase())
      );
      return {todos: updateTheTodos};

    case 'SHOW_INPUT':
      const updateTheTodoList = state.todos.map(todo => {
        if (todo.id === action.id) {
          todo.input = true
        } return todo;
      });
      return {todos: updateTheTodoList};

      case 'UPDATE_ITEM':
        const update = state.todos.map(todo => {
          if(todo.input === true) {
            todo.todo = action.input;
          } if(todo.input === true) {
            todo.input = false;
          } 
          return todo;
        });
        return { todos: update}
    default: return state;
  }
}