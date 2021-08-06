import React, {Component}from 'react';

class Counter extends Component {

    state = {count: 0}

    handleIncrement = () => {
        this.setState({count: this.state.count + 1})
    }
     
    render() { 
        return (<button onClick={this.handleIncrement}>{this.state.count}</button>
          );
    }
}
 
export default Counter;