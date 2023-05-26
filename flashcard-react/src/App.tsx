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
        <div className="lower-half">
          <div className="lower-half two">Hello</div>
          <div className="lower-half three">Hello</div>
          <div className="lower-half four">Hello</div>
        </div>
      </div>
    </>
  );
}

export default App;
