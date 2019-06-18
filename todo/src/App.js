import React from 'react';
import TodoContainer from './Components/TodoContainer';
import OneTodo from './Components/OneTodo';
import { connect } from 'react-redux';
import { NavLink, Route } from 'react-router-dom';
import styled from 'styled-components';

const StyledDiv = styled.div`

nav {
  display: flex;
  justify-content: space-around;
}

`;

const App = (props) => {
  return (
    <StyledDiv>
      <nav>
      {props.todos.map(todo =>
        <NavLink
        key={todo.id}
          to={`/${todo.day}`} >
          {todo.day}
        </NavLink>
      )}
      <NavLink
        to="/" >
        All Todos
      </NavLink>
      </nav>
      <Route
        exact path="/"
        component={TodoContainer} />
      {props.todos.map(todo =>
        <Route
        key={todo.id}
          path={`/${todo.day}`}
          render={() =>
            <OneTodo
              {...props}
              todos={todo}
            />}
        />
      )}
    </StyledDiv>
  );
}

const mapStateToProps = state => {
  return {
    todos: state.reduce1.todos
  }
};

export default connect(mapStateToProps)(App);
