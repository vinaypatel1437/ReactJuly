import React, { Component } from 'react';
import Foot1 from './Footer/Foot1';
import Foot2 from './Footer/Foot2';

class Footer extends Component {
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
        Name : {this.state.name} <br></br>
        <Foot1 myName={this.changeName} name={this.state.name} />
        <input onBlur={this.changeAge} type="number" placeholder='enter your age'></input><br></br>
        <Foot2 age={this.state.name}/>
      </div>
    )
  }
}

export default Footer;