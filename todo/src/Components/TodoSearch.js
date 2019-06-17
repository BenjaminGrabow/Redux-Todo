import React from 'react';
import { connect } from 'react-redux';

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

const mapDispatchToProps = dispatch => {
        return {
                searchItem: (input) => dispatch({ type: 'SEARCH', item: input }),
                back: () => dispatch({type: 'GO_BACK'})
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoSearch);