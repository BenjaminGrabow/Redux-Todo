import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { connect } from 'react-redux';
import TodoSearch from './TodoSearch';
// import OneTodo from './OneTodo';
import styled from 'styled-components';
// import { NavLink, Route} from 'react-router-dom';´
import * as actionDispatcher from '../store/actions';

const StyledDiv = styled.div`
text-align: center;
background: #bdc3c7;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #2c3e50, #bdc3c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
height: 200%;
border-radius: 30%;

h1 {
  color: white;
}

button {
margin-top: 2rem;
background-color: red;
border-radius: 50%;
width: 10%;
height: 5rem;
box-shadow: 1rem .5rem .5rem black;
}

input {
    border-radius: 3rem; 
    margin-top: .5rem;
    box-shadow: 1rem .5rem .5rem black;
    height: 2.5rem;   
}

.typing {
        position: relative;
}

@keyframes blink {
        0%{
                opacity: 0;
        }
        100%{
                opacity: 1;
        }
}
.typing::after {
        content: "";
        position: absolute;
        width: .1rem;
        height: 100%;
        border-right: .2rem solid white;
        animation: blink 0.5s infinite ease;
}
`;

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  // componentDidMount = () => {
  //   const texts = ['Todo-List', 'Day-Planner', 'Notices'];
  //   let count = 0;
  //   let index = 0;
  //   let currentText = "";
  //   let letter = "";

  //   (function type() {

  //     if (count === texts.length) {
  //       count = 0;
  //     }

  //     currentText = texts[count];
  //     letter = currentText.slice(0, ++index);

  //     document.querySelector('.typing').textContent = letter;
  //     if (letter.length === currentText.length) {
  //       count++;
  //       index = 0;
  //     }
  //     setTimeout(type, 400);
  //   }());
  // };

  render() {
    return (
      <StyledDiv>
        {/* <NavLink to="/" >All Todos</NavLink>
        <Route exact path="/" component={TodoList} ></Route> */}
        <TodoSearch />
        <h1>Make your own</h1>
        <h1 className="typing">List </h1>
        <TodoList/>
        <button onClick={this.props.deleteItems} >Delete</button>
        <TodoInput />
      </StyledDiv>
    );
  }
};


const mapStateToProps = state => {
  return {
     todolist: state.reduce1
  }
};

export default connect(mapStateToProps, actionDispatcher)(TodoContainer);