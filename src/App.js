import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <label htmlFor="hoge">bar</label>
        <input type="radio" id="hoge" onChange={() => { console.log("hoge") }} />
        <label htmlFor="hoge2">bar</label>
        <input type="radio" id="hoge2" onChange={() => { console.log("hoge") }} />
        <label htmlFor="hoge3">bar</label>
        <input type="text" id="hoge3" onChange={() => { console.log("hoge") }} />
      </React.Fragment>
    );
  }
}

export default App;
