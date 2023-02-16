import React, { Component } from 'react'


let myRef = React.createRef();

export default class RefSection extends Component {
  constructor() {
    super();
    this.state = {
        colorOptions: [
            {
                displayValue: 'Red Color',
                value: 'red'
            },
            {
                displayValue: 'Blue Color',
                value: 'blue'
            },
            {
                displayValue: 'Green Color',
                value: 'green'
            },
            {
                displayValue: 'Black Color',
                value: 'black'
            },
            {
                displayValue: 'White Color',
                value: 'white'
            },
        ],
        myNum: 0,
    }
    // this.myRef = React.createRef();
  }
  handleClick = () => {
    console.log(myRef);
  }
  handleClick1 = () => {
    this.setState({myNum: 100})
  }
  render() {
    return (
      <div>
        <select ref={myRef}>
            {
                this.state.colorOptions.map(({value, displayValue}, index)=>{
                  return (
                    <option value={value} key={index}>{displayValue}</option>
                  )
                })
            }
        </select>
        <input placeholder='type here' ref={myRef} type="number" value={this.state.myNum}/>
        
        <button onClick={this.handleClick1}>Clicked here</button>
        <button onClick={this.handleClick}>Click here</button>
      </div>
    )
  }
}
