import React, { Component } from 'react'
import MyPureChildComponent from './MyPureChildComponent';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/fontawesome-free-solid'
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.css';
// import Button from 'react-bootstrap/Button'
import Button from '@mui/material/Button';
import { CircularProgress, LinearProgress } from '@mui/material';
import { FaBeer } from 'react-icons/fa';


export default class MyPureComponent extends Component {
  constructor() {
    super();
    this.state = {
        myValue: '',
    }
  }
  handleBlur = (e) => {
    this.setState({myValue: e.target.value});
  }
  render() {
    return (
      <div>
    {/* <FontAwesomeIcon icon={faHeart} /> */}
        <input onBlur={this.handleBlur} />
        <MyPureChildComponent myProp={this.state.myValue}/>
        <Alert variant="danger">
          This is a success alert—check it out!
        </Alert>
        {/* <Button variant="success">Success</Button>{' '} */}
        <Button variant="contained">Contained</Button>
        <CircularProgress color="secondary" />
        <LinearProgress color="secondary" />
        <FaBeer/>
      </div>
    )
  }
}
