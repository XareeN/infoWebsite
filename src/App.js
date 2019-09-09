import React from 'react';
import './App.css';
import { 
  Container, 
  Box, 
  Typography} from '@material-ui/core';
import './resources/js/scripts';

function App() {
  return (
    <div className="App">
      {/* <div>
        <video src="https://player.vimeo.com/video/183786525" autoPlay muted loop>
          <source src="https://player.vimeo.com/video/183786525" type="video"/>
        </video>
        <iframe title="vimeo-player" src="https://player.vimeo.com/video/183786525" width="640" height="360" frameborder="0" allowfullscreen></iframe>
      </div> */}

      {/* <div className="tmp"></div> */}

      <nav id="navbar" className="z-depth-0 transparent custom-navbar cl-effect-15">
        <div className="nav-wrapper">
          {/* <a href="#" data-hover="Logo" className="brand-logo">Logo</a> */}
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="#sec1" data-hover="About me">About me</a></li>
            <li><a href="#sec2" data-hover="Portfolio">Portfolio</a></li>
            <li><a href="#sec3" data-hover="Contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <Box id="sec0" className="parallax-wrapper">
        <Typography variant="h1" component="h1" className="info-text">
          Looking for web dev?
        </Typography>
      </Box>
      <Box id="sec1" className="regular-wrapper non-parallax middle box ">
        <Typography variant="h4" component="h3" className="info-text">
          ... to box2 ...
        </Typography>
      </Box>
      <Box id="sec2" className="parallax-wrapper">
        <Typography variant="h4" component="h3" className="info-text">
          ... and to box3!
        </Typography>
      </Box>
      <Box id="sec3" className="regular-wrapper non-parallax end box ">
        <Typography variant="h4" component="h3" className="info-text">
          ... and to box4 ...
        </Typography>
      </Box>
      {/* <Box id="sec5" className="footer box ">
        <Typography variant="h4" component="h3" className="info-text">
          ... and to box4 ...
        </Typography>
      </Box> */}
    </div>
  );
}

export default App;
