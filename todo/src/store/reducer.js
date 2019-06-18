import * as actions from './actions';

const initialState = {
  todos: [],
  oldtodo: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_TODO:
      const newTodo = [...state.todos, action.payload];
      return  {todos: newTodo} ;

    case actions.CHANGE_TO_COMPLETED:
      const updateTodos = state.todos.map(todo => {
        if (todo.id === action.id) {
          todo.completed = true
        } return todo
      });
      return {todos: updateTodos};

    case actions.DELETE_ITEMS:
      const updateTodoList = state.todos.filter(todo => !todo.completed);
      return {todos: updateTodoList};

    case actions.SEARCH:
      const copyOfArray = state.todos;
      const updateTheTodos = state.todos.filter(todo =>
        todo.todo.toLocaleLowerCase().startsWith(action.item.toLocaleLowerCase())
        /// Include()
      );
      return {todos: updateTheTodos, oldtodo: copyOfArray};

    case actions.SHOW_INPUT:
      const updateTheTodoList = state.todos.map(todo => {
        if (todo.id === action.id) {
          todo.input = true
        } return todo;
      });
      return {todos: updateTheTodoList};

      case actions.GO_BACK:
        return {todos: state.oldtodo};

      case actions.UPDATE_ITEM:
        const update = state.todos.map(todo => {
          if(todo.input === true) {
            todo.todo = action.input;
            todo.input = false;
          } 
          return todo;
        });
        return { todos: update};
    default: return state;
  }
};