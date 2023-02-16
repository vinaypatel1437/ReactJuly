import React, { Component, PureComponent } from 'react'

export default class MyPureChildComponent extends PureComponent {
    // shouldComponentUpdate(newProp) {
    //     if (newProp.myProp !== this.props.myProp) {
    //       return true
    //     }else {
    //       return false
    //     }
    //   }
  render() {
    console.log("Rendring");
    return (
      <div>
        <h1>{this.props.myProp}</h1>
      </div>
    )
  }
}
