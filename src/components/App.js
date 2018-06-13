import React, { Component } from 'react';

const App = () => {return <Counter></Counter>}

class Counter extends Component {
  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
  }
  Increment = () => {
    var increment_count = this.state.count + 1
    this.setState({
      count: increment_count
    })
  }
  Decrement = () => {
    var decrement_count = this.state.count - 1
    this.setState({
      count: decrement_count
    })
  }
  render(){
    return(
      <React.Fragment>
        <div>count: {this.state.count}</div>
        <button onClick={this.Increment}>+</button>
        <button onClick={this.Decrement}>-</button>
      </React.Fragment>
    )
  }
}

export default App;
