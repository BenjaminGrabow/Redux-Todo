import React from 'react';
// import { connect } from 'react-redux';
import styled from 'styled-components';

const StyledDiv = styled.div`

.line-through {
  text-decoration: line-through;
}

.off {
  display: none;
}

ul {
        list-style: none;

        li {
          height: 2rem;
          font-size: 2rem;
        }
}

.todo {
background: #c31432;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #240b36, #c31432);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #240b36, #c31432); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
display: flex;
flex-direction: column;
color: white;
width: 50%;
margin: 1rem auto;
justify-content: space-around;
border-radius: 3rem;
align-items: center;
box-shadow: 1rem .5rem .5rem black;
transition: all 2s ease-in;

&:hover{
        transform: rotate(20deg);
}
}

.row {
  display: flex;
  text-align: left;
  width: 100%;
  justify-content: space-around;
  height: 4rem;
}

.button {
        width: 25%;
        margin: 0;
        height: 3.5rem;
}

`;

class OneTodo extends React.Component {
   render() {
                return (
                        <StyledDiv>
                        <ul>
                                        <div >
                                                <div 
                                                 className="todo">
                                                   <div>
                                                     <h1>{this.props.todos.day}</h1>
                                                   </div>
                                                   <div className="row">
                                                <li>
                                                        {this.props.todos.todo}
                                                </li>
                                                        </div>
                                                </div>
                                        </div>
                        </ul>
                        </StyledDiv>
                );
        }
}



// const mapStateToProps = (state) => {
//         return {
//                 todos: state.todos
//         }
// };


export default OneTodo;