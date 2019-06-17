import React from 'react';
import { connect } from 'react-redux';
import { addText } from '../store/actions';
import styled from 'styled-components';

const StyledContainer = styled.div`

`;

class TodoInput extends React.Component {
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

        handleSubmit = (e) => {
                e.preventDefault();

                this.props.text(this.state.input);

                this.setState({
                        input: "",
                });
        };

        render() {
                return (
                        <StyledContainer>
                        <form onSubmit={this.handleSubmit}>
                                <input
                                        value={this.state.input}
                                        onChange={this.handleChange}
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

export default connect(mapStateToProps, { text: addText })(TodoInput);