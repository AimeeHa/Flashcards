// import { useState } from 'react';
import './App.css';
import Slideshow from './Slideshow';
import Navbar from './Navbar';
import EastRoundedIcon from '@mui/icons-material/EastRounded';

function App() {
  return (
    <>
      <div id="homepage">
        <div>
          <Navbar />
        </div>
        <div id="banner">
          <Slideshow />
        </div>
        <div className="article">
          <div className="article one">
            <div className="article-header">RANDOM TERM OF THE DAY</div>
            <div className="main-message"></div>
            <div className="view-definition">
              <a href="">What's this?</a>
              <div className="view-arrow">
                <EastRoundedIcon style={{ width: '0.6em' }} />
              </div>
            </div>
          </div>
          <div className="article two">
            <div className="article-header">RANDOM TERM OF THE DAY</div>
            <div className="main-message"></div>
            <div className="view-definition">
              <a href="">What's this?</a>
              <div className="view-arrow">
                <EastRoundedIcon style={{ width: '0.6em' }} />
              </div>
            </div>
          </div>
          <div className="article three">
            <div className="article-header">CONTACT US</div>
            <div className="main-message">
              If you have encountered any issues while using Aimee's Cards, or
              have any suggestions for improving the application, don't hesitate
              to reach out!
            </div>
            <div className="smaller-note">
              (Or even if you just want to tell a random story &#128521;)
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
