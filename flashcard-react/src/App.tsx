// import { useState } from 'react';
import './App.css';
import Slideshow from './Slideshow';
import Navbar from './Navbar';
import getRandomTerm from './getRandomTerm';

function App() {
  return (
    <>
      <div id="homepage">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="banner">
          <Slideshow />
        </div>

        <div className="articles">
          <div className="articles one">
            <div className="article-header">TECHNOLOGY TERM OF THE DAY</div>
            {getRandomTerm('TECH')}
          </div>

          <div className="articles two">
            <div className="article-header">ENGLISH WORD OF THE DAY</div>
            {getRandomTerm('ENG')}
          </div>

          <div className="articles three">
            <div className="article-header">CONTACT US</div>
            <div className="contact-message">
              If you have encountered any issues while using Aimee's Cards, or
              have any suggestions for improving the application, don't hesitate
              to reach out!
            </div>
            <div className="contact-note">
              (Or even if you just want to share a random story &#128521;)
            </div>
            <div className="leave-message">
              <button>Leave Aimee a message</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
