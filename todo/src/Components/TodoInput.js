import React from 'react';
import { connect } from 'react-redux';
import * as actionDispatcher from '../store/actions';
import styled from 'styled-components';

const StyledContainer = styled.div`

`;

class TodoInput extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        inputTask: '',
                        inputDay: ''
                }
        }

        handleChange = (e) => {
                this.setState({
                        [e.target.name]: e.target.value
                });
        };

        handleSubmit = (e) => {
                e.preventDefault();

                this.props.text(this.state.inputTask, this.state.inputDay);

                this.setState({
                        inputTask: "",
                        inputDay: ""
                });
        };

        render() {
                return (
                        <StyledContainer>
                                <form onSubmit={this.handleSubmit}>
                                        <input
                                                name="inputTask"
                                                value={this.state.inputTask}
                                                onChange={this.handleChange}
                                                placeholder="add your task"
                                        ></input>
                                        <input
                                                name="inputDay"
                                                value={this.state.inputDay}
                                                onChange={this.handleChange}
                                                placeholder="add your day"
                                        ></input>
                                        <button
                                                type="submit">
                                                Add
                                        </button>
                                </form>
                        </StyledContainer>
                );
        }
}

const mapStateToProps = (state) => {
        return {}
};

export default connect(mapStateToProps, actionDispatcher)(TodoInput);