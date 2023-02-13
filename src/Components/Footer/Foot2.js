import React, { Component } from 'react'

export default class Foot2 extends Component {
  handleBtn=()=>{
    this.props.age = 56;
  }
  render() {
    return (
        <div>
            Age : {this.props.age}<br></br>
            <button onClick={this.handleBtn}>Change Age</button>
        </div>
    )
  }
}
