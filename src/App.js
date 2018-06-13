import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <label htmlFor="hoge">bar</label>
//         <input type="radio" id="hoge" onChange={() => { console.log("hoge") }} />
//         <label htmlFor="hoge2">bar</label>
//         <input type="radio" id="hoge2" onChange={() => { console.log("hoge") }} />
//         <label htmlFor="hoge3">bar</label>
//         <input type="text" id="hoge3" onChange={() => { console.log("hoge") }} />
//       </React.Fragment>
//     );
//   }
// }

const App = () => {
  const users = [
    {name: "h"},
    {name: "hoge",age: 10},
    {name: "hogehgoe",age: 100},
    {name: "hogehgoehoge",age: 1000}
  ]
  return(
    <div>
      {
        users.map((user, index) => {
          return <User name={user.name} age={user.age} key={index} />
        })
      }
    </div>
  )
}

const User = (props) => {
  return(
    <div>hi i am {props.name}! {props.age} years old!</div>
  )
}

User.defaultProps = {
  age: 1
}

export default App;
