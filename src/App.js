import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Test from './Components/Test';
// import * as Mains from './Components/Main';
// import {Main, Main1, Main2} from './Components/Main';

// function App() {
//   const [status, setStatus] = useState(false);
//   function changeStatus() {
//     setStatus(!status);
//   }
//   // let handleBlur = (e) => {
//   //   setStatus(e.target.value);
//   // }
//   return (
//     <div className="App">
//       <Header/>
//       {/* <Main/> */}
//       {
//        status ? "" : <Footer/>
//       }
//       {/* <Mains.Main></Mains.Main> */}
//       <button onClick={changeStatus}>Change Status</button>
//       {/* <input onBlur={handleBlur} placeholder="Type Props" />
//       <Test status={status} /> */}
//     </div>
//   );
// }

import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      status: false
    }
  }
  changeStatus = () => {
    this.setState({
      status: !this.state.status
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.changeStatus}>Change Status</button>
        {/* {
          this.state.status ? "" : <Footer/>
        } */}
        {
          this.state.status && <Footer/>
        }
      </div>
    )
  }
}

// export default App;