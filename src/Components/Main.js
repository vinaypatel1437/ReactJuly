import React from 'react';

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Vinay Patel',
      age: 23,
    }
  }
  changeName = (e) => {
    this.setState({ name: e.target.value });
  }
  changeAge = (e) => {
    this.setState({ age: e.target.value });
  }
  render() {
    return(
      <div>
        <input onChange={this.changeName} placeholder="Enter name or Confirm Name"></input><br></br>
        Name : { this.state.name }<br></br>
        <input onBlur={this.changeAge} type="number" placeholder='enter your age'></input><br></br>
        Age : { this.state.age }<br></br>
      </div>
    )
  }
}

// export default Main;
// export { Main, Main1, Main2, Main3 };





// Parent 

// 1. Beta1 
// 2. Beta2 
// 3. Beta3