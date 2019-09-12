import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';


export default class LandingPage extends Component {
    render() {
        return (
            <div>
                
        <nav id="navbar" className="z-depth-0 transparent custom-navbar hoverable">
            <div className="nav-wrapper">
            <a href="#" data-target="mobile-sidenav" className="sidenav-trigger"><i className="fa fa-bars" aria-hidden="true"></i></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="#about">About me</a></li>
                <li><a href="#work">Portfolio</a></li>
                <li><a href="#contacts">Contacts</a></li>
                </ul>
            </div>
        </nav>

        <ul className="sidenav" id="mobile-sidenav">
            <li><a href="#about">About me</a></li>
            <li><a href="#work">Portfolio</a></li>
            <li><a href="#contacts">Contacts</a></li>
        </ul>

          <div className="parallax-container landing-parallax flex">
            {/* <Parallax strength={300}>
              <div>Use the background component for custom elements</div>
              <Background className="custom-bg">
                <video src="/vids/Space-5200.mp4" autoPlay loop/>
              </Background>
            </Parallax> */}
            <div className="parallax">
              <video src="/vids/Space-5200.mp4" autoPlay loop/>
            </div>
            <div className="flex">
              <h1 className="animated-text-1s">Looking for a <br/>web developer?</h1>
              <p className="animated-text-3s">You came to the right place!</p>
            </div>
              <a className="waves-effect waves-light btn z-depth-3 animated-text-3s trans-btn" href="#work">
                <i className="fa fa-eye icon-margin" aria-hidden="true"></i>
                Check out my work!
              </a>
          </div>
    
          <div id="about" className="content-wrapper content-wrapper-shape z-depth-2">
            <div className="row">
              <div className="col s10 offset-s1 m8 offset-m2">
                <h2 className="section-title">About me</h2>
                <p>Hi, I'm Adam! Nice to meet you! I'm glad you're here :)<br/><br/>

                I'm a software developer currently located in Olkusz in Poland. I have a passion for creating out of the box solutions.<br/> 
                I'm an open minded fast learner for whom learning new things is always an enjoyment. Experienced in developing both front and back end.<br/><br/>

                In private life I love dancing and playing volleyball. Rollerblading is so much fun as well and ohh.. almost forgot about piano <i className="fa fa-heart" aria-hidden="true"></i></p>
              </div>
            </div>
              <div className="content">
                  
              </div>
          </div>




          {/* -----basic config-----*/}
            {/* <Parallax
                blur={10}
                bgImage={require('./resources/pics/work.jpg')}
                bgImageAlt="the cat"
                strength={200}
            >
                Put some text content here - even an empty div with fixed dimensions to have a height
                for the parallax.
                <div style={{ height: '200px' }} />
            </Parallax> */}

            {/* -----dynamic blur-----*/}
            <div className="parallax-container no-padding flex">
              <Parallax
                  blur={{ min: -15, max: 15 }}
                  bgImage={require('./resources/pics/desk.jpg')}
                  bgImageAlt="the dog"
                  strength={200}
                  style={{ height: '500px' }}
                  contentClassName="react-parallax-content custom-one"
              >
                  <div className="row">
                    <div className="col s8 offset-s2 m4 offset-m4">
                      <div className="jumbotron ">
                          <p>Check out some of my projects below!</p>
                      </div>
                    </div>
                  </div>
                  {/* <div style={{ height: '200px' }} /> */}
              </Parallax>
            </div>

            {/* -----custom background element-----*/}
            {/* <Parallax strength={300}>
                <div>Use the background component for custom elements</div>
                <Background className="custom-bg">
                    <img src="http://www.fillmurray.com/500/320" alt="fill murray" />
                </Background>
            </Parallax> */}

            {/* -----renderProp: "renderLayer"-----*/}
            {/* <Parallax
                bgImage={'./resources/pics/code.jpg'}
                strength={400}
                renderLayer={percentage => (
                    <div
                        style={{
                            position: 'absolute',
                            background: `rgba(255, 125, 0, ${percentage * 1})`,
                            left: '50%',
                            top: '50%',
                            width: percentage * 500,
                            height: percentage * 500,
                        }}
                    />
                )}
            >
            <p>... Content</p>
            </Parallax> */}





    
          {/* <div className="parallax-container flex">
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
          </div> */}
    
          <div id="work" className="content-wrapper content-wrapper-shape">
            <div className="row">
              <div className="col s10 offset-s1 m8 offset-m2">
                <h2 className="section-title">My work</h2>
                <p>Below are some examples of what i've worked on.</p>
              </div>
              <div className="col s10 offset-s1 m8 offset-m2 jumbotron jumbotron-custom-bg">
                <div className="row">
                  <div className="col s12 m8">
                    <h3>Planner app for beauty salon </h3>
                    <p>This application was created to help beauty salon get rid of paper planners.</p>
                    <a className="waves-effect waves-light btn btn-margin btn-background" href="https://github.com/XareeN/UrodaManagementApplication">
                      <i className="fa fa-code icon-margin" aria-hidden="true"></i>
                      View source code
                    </a>
                    <a className="waves-effect waves-light btn btn-margin btn-background" href="#">
                      <i className="fa fa-info-circle icon-margin" aria-hidden="true"></i>
                      More info
                    </a>
                  </div>
                  <div className="col s12 m4">
    
                  </div>
                </div>
              </div>
              <div className="col s10 offset-s1 m8 offset-m2 jumbotron jumbotron-custom-bg">
                <div className="row">
                    <div className="col s12 m8">
                      <h3>OgrodyNicole website </h3>
                      <p>Currently under construction, but will be done in near future :)</p>
                      <a className="waves-effect waves-light btn btn-margin btn-background" href="#">
                        <i className="fa fa-code icon-margin" aria-hidden="true"></i>
                        View source code
                      </a>
                      <a className="waves-effect waves-light btn btn-margin btn-background" href="http://ogrodynicole.pl/">
                        <i className="fa fa-eye icon-margin" aria-hidden="true"/>
                        View website
                      </a>
                      <a className="waves-effect waves-light btn btn-margin btn-background" href="#">
                        <i className="fa fa-info-circle icon-margin" aria-hidden="true"></i>
                        More info
                      </a>
                    </div>
                    <div className="col s12 m4">
    
                    </div>
                </div>
              </div>
              <div className="col s10 offset-s1 m8 offset-m2 jumbotron jumbotron-custom-bg">
                <div className="row">
                  <div className="col s12 m8">
                    <h3>Stopwatch </h3>
                    <p>A basic stopwatch with common functions</p>
                    <a className="waves-effect waves-light btn btn-margin btn-background" href="https://github.com/XareeN/stopwatch">
                      <i className="fa fa-code icon-margin" aria-hidden="true"></i>
                      View source code
                    </a>
                    <a className="waves-effect waves-light btn btn-margin btn-background" href="#">
                      <i className="fa fa-info-circle icon-margin" aria-hidden="true"></i>
                      More info
                    </a>
                  </div>
                  <div className="col s12 m4">
    
                  </div>
                </div>
              </div>
              <div className="col s10 offset-s1 m8 offset-m2 jumbotron jumbotron-custom-bg">
                <div className="row">
                  <div className="col s12 m8">
                    <h3>This portfolio site :) </h3>
                    <p>I know, I know. Just.. let it happen.</p>
                    <a className="waves-effect waves-light btn btn-margin btn-background" href="https://github.com/XareeN/infoWebsite">
                      <i className="fa fa-code icon-margin" aria-hidden="true"></i>
                      View source code
                    </a>
                  </div>
                  <div className="col s12 m4">
    
                  </div>
                </div>
              </div>
            </div>
          </div>
    
          <div className="parallax-container no-padding flex">
            <Parallax
                blur={{ min: -15, max: 15 }}
                bgImage={require('./resources/pics/work.jpg')}
                bgImageAlt="the dog"
                strength={200}
                style={{ height: '500px' }}
                contentClassName="react-parallax-content custom-one"
            >
                <div className="row">
                  <div className="col s8 offset-s2 m4 offset-m4">
                    <div className="jumbotron">
                        <p>If I got your attention, let me know by contacting me!</p>
                    </div>
                  </div>
                </div>
                {/* <div style={{ height: '200px' }} /> */}
            </Parallax>
          </div>

          {/* <div className="parallax-container flex">
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
          </div> */}
    
          <div id="contacts" className="content-wrapper" distortion="2vh">
            <div className="row">
              <div className="col s10 offset-s1 m8 offset-m2">
                <h2 className="section-title">Contacts</h2>
                <div className="col s12 flex links">
                  <div className="jumbotron jumbotron-custom-bg-trans jumbotron-custom-box-shadow">
                    <a href="https://www.linkedin.com/in/adbigaj/"><p><i className="fa fa-linkedin-square icon-margin" aria-hidden="true"></i>LinkedIn profile</p></a>
                    <a href="https://github.com/XareeN"><p className="link-text"><i className="fa fa-github icon-margin" aria-hidden="true"></i>Github account</p></a>
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
