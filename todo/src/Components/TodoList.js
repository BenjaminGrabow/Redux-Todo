import React from 'react';
import { connect } from 'react-redux';
import '../App.css'

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
                        <ul>
                                {this.props.todos.map(todo =>
                                        <div key={todo.id}>
                                                <li
                                                        className={todo.completed === false ? null : 'line-through'}
                                                        onClick={() => this.props.changeToCompleted(todo.id)}>
                                                        {todo.todo}
                                                </li>
                                                <button onClick={() => this.props.showInput(todo.id)}>Update</button>
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









