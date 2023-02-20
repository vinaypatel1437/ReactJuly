// import logo from './logo.svg';
import "./App.css";
// import { useState } from 'react';
// import Header from './Components/Header';
// import Footer from './Components/Footer';
// import Main from './Components/Main';
// import Test from './Components/Test';
// import MyPureComponent from './Components/MyPureComponent';
// import Mentor from './Components/Mentor';
// import * as Mains from './Components/Main';
// import {Main, Main1, Main2} from './Components/Main';

// export default function App() {
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
//        status ? "" : </>
//       }
//       {/* <Mains.Main></Mains.Main> */}
//       <button onClick={changeStatus}>Change Status</button>
//       {/* <input onBlur={handleBlur} placeholder="Type Props" />
//       <Test status={status} /> */}
//     </div>
//   );
// }





import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Components2/MainPage";
import Login from "./Components2/Login";
import About from "./Components2/About";
import Header from "./Components/Header"
import Footer from "./Components2/Footer";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<MainPage/>}></Route>
          <Route path="about" element={<About/>}></Route>
          <Route path="login" element={<Login/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
      // <div>
      //   <MainPage/>
      //   <Login/>
      //   <About/>
      // </div>
    );
  }
}

// export default App;
{
  /* <>
      {/* // <div> */
}
{
  /* //   <button onClick={this.changeStatus}>Change Status</button> */
}
// {this.state.status ? "" : <Footer/>}
// {this.state.status && <Footer/>}
{
  /* // </div> */
}
{
  /* // <Sample/> */
}
{
  /* // <RefSection/> */
}
// <MyPureComponent/>
// </> */}
