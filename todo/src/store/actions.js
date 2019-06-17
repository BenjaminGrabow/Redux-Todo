import uuid from 'uuid';
export const ADD_TODO = 'ADD_TODO';

export function addText(text) {
        const newTodo = {
                todo: text,
                completed: false,
                id: uuid(),
                input: false
        }
        return { type: ADD_TODO, payload: newTodo }
}