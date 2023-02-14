import React, { Component } from 'react'

export default class Foot2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myAge: 'asdfd',
    }
    this.vinay = 'vinay';
  }
  // static getDerivedStateFromProps(props, state) {
  //   if (props.age !== state.myAge) {
  //     state.myAge = props.age;
  //   }
  //   return null;
  // }
  shouldComponentUpdate(newProp) {
    if (newProp.age !== this.props.age) {
      return true
    }else {
      return false
    }
  }
  componentDidMount() {
    console.log("component did mount");
  }
  componentDidUpdate() {
    console.log("Inside component did update");
  }
  handleChange = () =>  {
    this.vinay = "patel";
    console.log(this.vinay);
    this.forceUpdate();
  }
  render() {
    console.log("render");
    return (
        <div>
            <button onClick={this.handleChange}>Click here to change</button>
            Age : {this.vinay}<br></br>
        </div>
    )
  }
}
