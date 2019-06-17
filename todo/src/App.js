import React from 'react';
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';
import { connect } from 'react-redux';
import TodoSearch from './Components/TodoSearch';
import styled from 'styled-components';

const StyledDiv = styled.div`
text-align: center;

button {
  margin-top: 2rem;
background-color: red;
border-radius: 50%;
width: 5%;
height: 3rem;
box-shadow: 1rem .5rem .5rem black;
}

input {
    border-radius: 3rem; 
    margin-top: .5rem;
    box-shadow: 1rem .5rem .5rem black;   
}

`;


function App(props) {
  return (
    <StyledDiv>
      <TodoSearch />
      <TodoList />
      <button onClick={props.deleteItems} >Delete</button>
      <TodoInput />
    </StyledDiv>
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
