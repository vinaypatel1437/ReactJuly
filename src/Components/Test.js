import React, { Component } from 'react'

export default class Test extends Component {
  constructor() {
    super();
    this.state = {
        value: 'hello world'
    }
  }
  handleBlur = (e) => {
    this.setState( {
        value: e.target.value
    });
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // document.getElementById('previousVal').innerHTMl = `Previout value: ${prevState.value}`
    console.log(prevState.value)
    console.log(prevProps.status)
    return prevState;
  }
  componentDidUpdate() {
    console.log(this.state.value);
  }
  render() {
    return (
        <div>
            <input onBlur={this.handleBlur} placeholder="Type Something" />
            <div>{ this.state.value }</div>
            <div id="previousVal">{this.props.status}</div>
        </div>
    )
  }
}
