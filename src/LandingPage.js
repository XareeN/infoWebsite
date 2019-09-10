import React, { Component } from 'react'

export default class LandingPage extends Component {
    render() {
        return (
            <div>
                
          <nav id="navbar" className="z-depth-0 transparent custom-navbar hoverable">
            <div className="nav-wrapper">
              {/* <a href="#" data-hover="Logo" className="brand-logo">Logo</a> */}
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="#about">About me</a></li>
                <li><a href="#work">Portfolio</a></li>
                <li><a href="#contacts">Contacts</a></li>
              </ul>
            </div>
          </nav>

          <div className="parallax-container landing-parallax flex">
            <div className="parallax">
              <video src="/vids/Space-5200.mp4" autoPlay loop/>
            </div>
            <div className="flex">
              <h1>Looking for a <br/>web developer?</h1>
              <p>You came to the right place!</p>
            </div>
          </div>
    
          <div id="about" className="content-wrapper content-wrapper-shape">
            <div className="row">
              <div className="col s8 offset-s2">
                <h2 className="section-title">About me</h2>
                <p>I'm a conscientious software developer with a passion for creating out of the box solutions.<br/> 
                Open minded fast learner for whom learning new things is always an enjoyment. Experienced in developing both front and back end.<br/><br/>
                In private life I love dancing and playing volleyball. Rollerblading is so much fun as well and ohh.. almost forgot about piano <i className="fa fa-heart" aria-hidden="true"></i></p>
              </div>
            </div>
              <div className="content">
                  
              </div>
          </div>
    
          <div className="parallax-container flex">
            <div className="parallax">
              <img src="/pics/work.jpg"/>
            </div>
            <div className="row">
              <div className="col s8 offset-s2">
                <div className="jumbotron">
                    <p>Check out some of my projects below!</p>
                </div>
              </div>
            </div>
          </div>
    
          <div id="work" className="content-wrapper content-wrapper-shape">
            <div className="row">
              <div className="col s8 offset-s2">
                <h2 className="section-title">My work</h2>
                <p>Below are some examples of what i've worked on.</p>
              </div>
              <div className="col s8 offset-s2 jumbotron jumbotron-custom-bg">
                <div className="row">
                  <div className="col s8">
                    <h3>Planner app for beauty salon </h3>
                    <p>This application was created to help beauty salon get rid of paper planners.</p>
                    <a className="waves-effect waves-light btn btn-margin btn-background" href="https://github.com/XareeN/UrodaManagementApplication">
                      <i className="fa fa-code icon-margin" aria-hidden="true"></i>
                      View source code
                    </a>
                  </div>
                  <div className="col s4">
    
                  </div>
                </div>
              </div>
              <div className="col s8 offset-s2 jumbotron jumbotron-custom-bg">
                <div className="row">
                    <div className="col s8">
                      <h3>OgrodyNicole website </h3>
                      <p>Currently under construction, but will be done in near future :)</p>
                      <a className="waves-effect waves-light btn btn-margin btn-background" href="#">
                        <i className="fa fa-code icon-margin" aria-hidden="true"></i>
                        View source code
                      </a>
                      <a className="waves-effect waves-light btn btn-margin btn-background" href="http://ogrodynicole.pl/"><i className="fa fa-eye icon-margin" aria-hidden="true"/>View website</a>
                    </div>
                    <div className="col s4">
    
                    </div>
                </div>
              </div>
              <div className="col s8 offset-s2 jumbotron jumbotron-custom-bg">
                <div className="row">
                  <div className="col s8">
                    <h3>Stopwatch </h3>
                    <p>A basic stopwatch with common functions</p>
                    <a className="waves-effect waves-light btn btn-background" href="https://github.com/XareeN/stopwatch">
                      <i className="fa fa-code icon-margin" aria-hidden="true"></i>
                      View source code
                    </a>
                  </div>
                  <div className="col s4">
    
                  </div>
                </div>
              </div>
              <div className="col s8 offset-s2 jumbotron jumbotron-custom-bg">
                <div className="row">
                  <div className="col s8">
                    <h3>This portfolio site :) </h3>
                    <p>I know, i know, but there are some people who can't even do their own profile and they're starting .</p>
                    <a className="waves-effect waves-light btn btn-background" href="https://github.com/XareeN/infoWebsite">
                      <i className="fa fa-code icon-margin" aria-hidden="true"></i>
                      View source code
                    </a>
                  </div>
                  <div className="col s4">
    
                  </div>
                </div>
              </div>
            </div>
          </div>
    
          <div className="parallax-container flex">
            <div className="parallax">
              <img src="/pics/work.jpg"/>
            </div>
            <div className="row">
              <div className="col s8 offset-s2">
                <div className="jumbotron">
                  <p>If I got your attention, let me know by contacting me!</p>
                </div>
              </div>
            </div>
          </div>
    
          <div id="contacts" className="content-wrapper" distortion="2vh">
            <div className="row">
              <div className="col s8 offset-s2">
                <h2 className="section-title">Contacts</h2>
                <div className="col s12 flex">
                  <div className="flex links">
                    <a href="https://www.linkedin.com/in/adbigaj/"><p><i className="fa fa-linkedin-square icon-margin" aria-hidden="true"></i>LinkedIn profile</p></a>
                    <a href="https://github.com/XareeN"><p><i className="fa fa-github icon-margin" aria-hidden="true"></i>Github account</p></a>
                    <p><i className="fa fa-envelope-o icon-margin" aria-hidden="true"></i>adam.bigaj@interia.eu</p>
                    <p><i className="fa fa-phone icon-margin" aria-hidden="true"></i>+48 723 880 132</p>
                  </div>
                </div>
    
              </div>
            </div>
          </div>
    
          <div className="footer flex">
                  <p>Copyright © 2019 Adam Bigaj</p>
          </div>
      
            </div>
        )
    }
}
