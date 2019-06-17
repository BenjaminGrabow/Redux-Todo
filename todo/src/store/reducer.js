import { ADD_TODO } from './actions';

const initialState = {
        todos: []
};

export default (state = initialState, action) => {
        switch(action.type){
                case ADD_TODO:
                        const newTodo = [...state.todos, action.payload]
                        return Object.assign({},state , {todos: newTodo});
                case 'CHANGE_TO_COMPLETED':
                        const updateTodos = state.todos.map(todo => {
                                if(todo.id === action.id){
                                        todo.completed = true
                                } return todo
                        });
                        return Object.assign({}, state, {todos: updateTodos})
                        default: return state;
        }
}