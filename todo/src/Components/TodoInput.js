import React from 'react';
import { connect } from 'react-redux';
import { addText } from '../store/actions';

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
                console.log(this.state.input)
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
                );
        }
}

const mapStateToProps = (state) => {
        return {}
};

export default connect(mapStateToProps, { text: addText })(TodoInput);