import React, { Component } from 'react';

class Footer extends Component {
  constructor() {
    super();
    this.state = { footerColor: "class1" };
  }
  handleColor = () =>  {
    this.setState({footerColor: 'class2'});
  }
  render() {
    return (
        <h1>
            <div className={this.state.footerColor}>Footer</div>
            <button onClick={this.handleColor}>Change Color</button>
            <div>Footer2</div>
        </h1>
    )
  }
}

export default Footer;