// import { useState } from 'react';
import './App.css';
import Slideshow from './Slideshow';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <div id="homepage">
        <div>
          <Navbar></Navbar>
        </div>
        <div id="banner">
          <Slideshow></Slideshow>
        </div>
        <div id="lower-half">
          <div id="two">Hello</div>
          <div id="three">Hello</div>
          <div id="four">Hello</div>
        </div>
      </div>
    </>
  );
}

export default App;
