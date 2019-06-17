import React from 'react';
import { connect } from 'react-redux';

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
        }

        render() { 
                return ( 
                        <form onSubmit={this.handleSubmit}>
                                <input
                                value={this.state.input}
                                onChange={this.handleChange}
                                ></input>
                                <button>Add</button>
                        </form>
                 );
        }
}

const mapStateToProps = (state) => {
        return {}
};

const mapDispatchToProps = (dispatch) => {
        return {
                
        }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);