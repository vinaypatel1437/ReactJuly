import React, { Component } from 'react'
import Foot2 from './Foot2'

export default class Foot1 extends Component {
//   constructor(){
//   }
  render() {
    return (
        <div>
            <input onChange={this.props.myName} placeholder="Enter name or Confirm Name"></input><br></br>
            <Foot2 age={this.props.name}></Foot2>
        </div>
    )
  }
}
