import React from 'react';
import { connect } from 'react-redux';
import * as actionDispatchers from '../store/actions';

class TodoSearch extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        input: '',
                        copyOfArray: ''
                }
        }

        handleChange = (e) => {
                this.setState({
                        input: e.target.value
                });
        };

        search = () => {
                this.setState({
                        input: '',
                        copyOfArray: this.props.copy
                });

                this.props.searchItem(this.state.input, this.state.copyOfArray);

        };

        goBack = () => {
                this.props.back(this.state.copyOfArray);

                this.setState({
                        copyOfArray: ''
                })
        };

        render() {
                return (
                        <div>
                                <button onClick={this.goBack}>Back</button>
                                <input
                                        value={this.state.input}
                                        onChange={this.handleChange}
                                ></input>
                                <button onClick={this.search}>
                                        Search
                                        </button>
                        </div>
                );
        }
};

const mapStateToProps = state => {
        return {
                copy: state.reduce1.todos
        }
};


export default connect(mapStateToProps, actionDispatchers)(TodoSearch);