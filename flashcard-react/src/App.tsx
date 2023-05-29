// import { useState } from 'react';
import './App.css';
import Slideshow from './Slideshow';
import Navbar from './Navbar';
import EastRoundedIcon from '@mui/icons-material/EastRounded';

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
            <div className="article-header">RANDOM TERM OF THE DAY</div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                flexGrow: 0.8,
                gap: '12px',
              }}
            >
              <div className="terms">{/* TODO: */} AAAAA</div>
              <div className="view-definition">
                <a href="">What's this?</a>
                <div className="view-arrow">
                  <EastRoundedIcon style={{ width: '0.6em' }} />
                </div>
              </div>
            </div>
          </div>
          <div className="articles two">
            <div className="article-header">RANDOM TERM OF THE DAY</div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                flexGrow: 0.8,
                gap: '12px',
              }}
            >
              <div className="terms">{/* TODO: */} BBBBB</div>
              <div className="view-definition">
                <a href="">What's this?</a>
                <div className="view-arrow">
                  <EastRoundedIcon style={{ width: '0.6em' }} />
                </div>
              </div>
            </div>
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
