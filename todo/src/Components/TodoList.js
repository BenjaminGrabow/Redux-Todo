import React from 'react';
import { connect } from 'react-redux';
import '../App.css'

const TodoList = (props) => {
        return ( 
                <ul>
                        {props.todos.map(todo => <li 
                        className={todo.completed === false ? null : 'line-through'}
                        onClick={() => props.changeToCompleted(todo.id)}>
                        {todo.todo}
                        </li>)}
                </ul>
         );
}
 
const mapStateToProps = (state) => {
        return {
                todos: state.todos
        }
};

const mapDispatchToProps = dispatch => {
        return {
                changeToCompleted: (id) => dispatch({type: 'CHANGE_TO_COMPLETED', id: id})
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);