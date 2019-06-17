import React from 'react';
import { connect } from 'react-redux';
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
}

.todo {
background: #c31432;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #240b36, #c31432);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #240b36, #c31432); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
display: flex;
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

.button {
        width: 10%
}

`;

class TodoList extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        input: ''
                }
        }

        handleChange = (e) => {
                this.setState({
                        input: e.target.value
                });
        };

        update = () => {
                this.props.updateItem(this.state.input);

                this.setState({
                        input: ''
                });
        };

        render() {
                return (
                        <StyledDiv>
                        <ul>
                                {this.props.todos.map(todo =>
                                        <div  
                                        key={todo.id}>
                                                <div 
                                                 className="todo">
                                                <li
                                                        className={todo.completed === false ? null : 'line-through'}
                                                        onClick={() => this.props.changeToCompleted(todo.id)}>
                                                        {todo.todo}
                                                </li>
                                                <button
                                                className="button" 
                                                onClick={() => this.props.showInput(todo.id)}>
                                                        Update
                                                        </button>
                                                </div>
                                                <div className={todo.input === false ? 'off' : null}>
                                                        <input
                                                                value={this.state.input}
                                                                onChange={this.handleChange}
                                                        ></input>
                                                        <button onClick={this.update}>
                                                                Update
                                        </button>
                                                </div>
                                        </div>)}
                        </ul>
                        </StyledDiv>
                );
        }
}

const mapStateToProps = (state) => {
        return {
                todos: state.todos
        }
};

const mapDispatchToProps = dispatch => {
        return {
                changeToCompleted: (id) => dispatch({ type: 'CHANGE_TO_COMPLETED', id: id }),
                showInput: (id) => dispatch({ type: 'SHOW_INPUT', id: id}),
                updateItem: (input) => dispatch({ type: 'UPDATE_ITEM', input: input})
        }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);









