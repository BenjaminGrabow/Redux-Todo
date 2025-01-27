import uuid from 'uuid';

export const ADD_TODO = 'ADD_TODO';
export const CHANGE_TO_COMPLETED = 'CHANGE_TO_COMPLETED';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const SHOW_INPUT = 'SHOW_INPUT';
export const DELETE_ITEMS = 'DELETE_ITEMS';
export const SEARCH = 'SEARCH';
export const GO_BACK = 'GO_BACK';

export function text(task, day) {
  const newTodo = {
    todo: task,
    day: day,
    completed: false,
    id: uuid(),
    input: false
  }
  return { type: ADD_TODO, payload: newTodo }
}

export function changeToCompleted(id) {
  return { type: CHANGE_TO_COMPLETED, id: id }
}

export function updateItem(input) {
  return { type: UPDATE_ITEM, input: input }
}

export function showInput(id) {
  return { type: SHOW_INPUT, id: id }
}

export function deleteItems() {
  return { type: DELETE_ITEMS }
}

export function searchItem(input, copyOfArray) {
  return { type: SEARCH, item: input, copyOfArray: copyOfArray }
}

export function back(oldArray) {
  return { type: GO_BACK, oldArray: oldArray }
}