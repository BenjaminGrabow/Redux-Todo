export const ADD_TODO = 'ADD_TODO';

export function addText(text) {
        const newTodo = {
                todo: text,
                completed: false,
                id: new Date()
        }
        return { type: ADD_TODO, payload: newTodo}
}