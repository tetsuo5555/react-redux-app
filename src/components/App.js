import React, { Component } from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../actions'

class App extends Component {
  render(){
    const props = this.props
    return(
      <React.Fragment>
        <div>value: {props.value}</div>
        <button onClick={props.increment}>+</button>
        <button onClick={props.decrement}>-</button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ value: state.count.value })
const mapDispatchToProps = ({ increment, decrement })

export default connect(mapStateToProps, mapDispatchToProps)(App);


// function mapDispatchToProps(dispatch){
//   return {
//     increment(){
//       dispatch(increment());
//     },
//     decrement(){
//       dispatch(decrement())
//     }
//   };
// }
