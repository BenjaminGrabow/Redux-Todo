import React from 'react';
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';
import { connect } from 'react-redux';
import TodoSearch from './Components/TodoSearch';
import styled from 'styled-components';

const StyledDiv = styled.div`
text-align: center;
background: #bdc3c7;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #2c3e50, #bdc3c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
height: 100vh;

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
    height: 2.5rem;   
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
