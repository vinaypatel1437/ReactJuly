import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
// import * as Mains from './Components/Main';
// import {Main, Main1, Main2} from './Components/Main';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Main/> */}
      <Footer/>
      {/* <Mains.Main></Mains.Main> */}
    </div>
  );
}

export default App;