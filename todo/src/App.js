import React from 'react';
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoList />
      <TodoInput />
    </div>
  );
}

export default App;
