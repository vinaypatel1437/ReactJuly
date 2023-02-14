import React, { Component } from 'react';
import Foot1 from './Footer/Foot1';
import Foot2 from './Footer/Foot2';

class Footer extends Component {
  constructor() {
    // console.log("Inside constructor");
    super();
    this.state = {
      name: 'Vinay Patel',
      age: 23,
    }
  }
  // componentDidMount() {
  //   // console.log("Inside component did mount");
  // }
  // componentDidUpdate() {
  //   // console.log("Inside Component did update")
  // }
  // componentWillUnmount() {
  //   // console.log("Component Unmounted");
  // }
  changeName = (e) => {
    this.setState({ name: e.target.value });
  }
  changeAge = (e) => {
    this.setState({ age: e.target.value });
  }
  render() {
    // console.log("Inside render");
    return(
      <div>
        Name : { this.state.name } <br></br>
        <Foot1 myName={this.changeName} name={this.state.name} />
        <input onBlur={this.changeAge} type="number" placeholder='enter your age'></input><br></br>
        <Foot2 age={ this.state.age }/>
      </div>
    )
  }
}

export default Footer;