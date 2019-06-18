import React from 'react';
import { connect } from 'react-redux';
import * as actionDispatchers from '../store/actions';

class TodoSearch extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        input: '',
                }
        }

        handleChange = (e) => {
                this.setState({
                        input: e.target.value
                });
        };

        search = () => {
                this.props.searchItem(this.state.input);

                this.setState({
                        input: ''
                });
        };

        render() {
                return (
                        <div>
                                <button onClick={this.props.back}>Back</button>
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
        return {}
};


export default connect(mapStateToProps, actionDispatchers)(TodoSearch);