import { ADD_TODO } from './actions';

const initialState = {
        todos: []
};

export default (state = initialState, action) => {
        switch(action.type){
                case ADD_TODO:
                        const newTodo = [...state.todos, action.payload]
                        return Object.assign({},state , {todos: newTodo});
                        default: return state;
        }
}