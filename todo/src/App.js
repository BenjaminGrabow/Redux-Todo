import React from 'react';
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';
import { connect } from 'react-redux';
import TodoSearch from './Components/TodoSearch';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <TodoSearch />
      <TodoList />
      <button onClick={props.deleteItems} >Delete</button>
      <TodoInput />
    </div>
  );
};

const mapStateToProps = state => {
  return {}
};

const mapDispatchToProps = dispatch => {
  return {
    deleteItems: () => dispatch({ type: 'DELETE_ITEMS' })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
