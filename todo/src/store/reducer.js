import * as actions from './actions';

const initialState = {
  todos: [],
  oldtodo: []
};

export function reducer1(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_TODO:
      const newTodo = [...state.todos, action.payload];
      return  {todos: newTodo} ;

    case actions.CHANGE_TO_COMPLETED:
      const completed = state.todos.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, completed: true };
        }
        return todo;
      });
      return {todos: completed}

      case actions.DELETE_ITEMS:
        const deleter = state.todos.filter(todo => !todo.completed);
        return {todos: deleter}

        case actions.SHOW_INPUT:
         const showInput = state.todos.map(todo => {
        if (todo.id === action.id) {
          return {...todo, input: true}
        } return todo;
      });
      return {todos: showInput}
      
        case actions.UPDATE_ITEM:
         const update = state.todos.map(todo => {
            if(todo.input === true) {
             return {...todo, todo: action.input, 
            input: false} 
            } 
            return todo;
          });
          return {todos: update}
          
          case actions.SEARCH:
            const copyOfArray = state.todos;
      const updateTheTodos = state.todos.filter(todo =>
        todo.todo.toLocaleLowerCase().startsWith(action.item.toLocaleLowerCase())
        );
        return {todos: updateTheTodos, oldtodo: copyOfArray};

      case actions.GO_BACK:
        return {todos: state.oldtodo};
        default: return state;
        
  }
};

// const initialState2 = {
//   oldTodos: []
// };

// export function reducer2(state = initialState2, action) {
//   switch (action.type) {
//   case 
//   }
// }