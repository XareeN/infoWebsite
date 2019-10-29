import React, {Component, lazy, Suspense} from 'react';
import { Parallax, Background } from 'react-parallax';
import { Modal } from 'react-materialize';
import { Controller, Scene } from 'react-scrollmagic';
// import 'aos';
// import VideoComp from './VideoComponent';

const Video = lazy(() => import('./VideoComponent'));

export default class LandingPage extends Component {

    constructor(){
        super();
        this.state = {
            parallaxDisabled: false,
        }
    }

    componentDidMount(){
      if(window.innerWidth <= 600){
        this.setState({
          parallaxDisabled: true
        })
      }else{
        this.setState({
          parallaxDisabled: false
        })
      };

      window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(e) {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        console.log('dziaba');
      }
    }




    render() {
        return (
            <div>
                
        <nav id="navbar" className="z-depth-0 transparent custom-navbar">
            <div className="nav-wrapper">
            <a href="#mobile-nav" data-target="mobile-nav" className="right sidenav-trigger modal-trigger"><i id="bars" className="fa fa-bars" aria-hidden="true"></i></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="#about">About me</a></li>
                <li><a href="#work">Portfolio</a></li>
                <li><a href="#contacts">Contacts</a></li>
                </ul>
            </div>
        </nav>

        <Modal id="mobile-nav" className="c-mobile-nav" header="Menu">
            <div className="flex">
                <a href="#home" className="btn z-depth-3 trans-btn btn-margin modal-close">Home</a>
                <a href="#about" className="btn z-depth-3 trans-btn btn-margin modal-close">About me</a>
                <a href="#work" className="btn z-depth-3 trans-btn btn-margin modal-close">Portfolio</a>
                <a href="#contacts" className="btn z-depth-3 trans-btn btn-margin modal-close">Contacts</a>
            </div>
        </Modal>


          <div id="home" className="parallax-container landing-parallax flex">
            {/* <Parallax strength={300}>
              <div>Use the background component for custom elements</div>
              <Background className="custom-bg">
                <video src="/vids/Space-5200.mp4" autoPlay loop/>
              </Background>
            </Parallax> */}
            <div className="parallax">
            <Suspense fallback={
              <div>Loading...</div>
            }>
              {window.innerWidth <= 600 ? <img src="./resources/pics/work.jpg" alt="Work" /> : <Video/>}
              {/* <Video/> */}
              {/* <video src="/vids/Space-5200.mp4" autoPlay loop/> */}
            </Suspense>
            </div>
            <div className="flex">
              <h1 className="animated-text-1s c-landing-text opacity-0">Looking for a <br/> software developer?</h1>
              <p className="animated-text-3s opacity-0">You came to the right place!</p>
            </div>
              <a className="waves-effect waves-light btn z-depth-3 animated-text-3s opacity-0 trans-btn" href="#work">
                <i className="fa fa-eye icon-margin" aria-hidden="true"></i>
                Check out my work!
              </a>
          </div>
    
          <div id="about" className="content-wrapper content-wrapper-shape z-depth-2">
            <div className="row">
              <div className="col s10 offset-s1 m8 offset-m2">
                <Controller>
                  <Scene 
                    classToggle={("#about-header", "faded-in")}
                    triggerHook="1">
                    <h2 id="about-header" className="section-title fade-in">About me</h2>
                  </Scene>
                  <Scene 
                    classToggle={("#about-p", "faded-in")}
                    triggerHook="0.9">
                      <p id="about-p" className="fade-in">Hi, I'm Adam! Nice to meet you! I'm glad you're here :)<br/><br/>

                      I'm a software developer currently located in Olkusz in Poland. I have a passion for creating out of the box solutions.<br/> 
                      I'm an open minded fast learner for whom learning new things is always an enjoyment. Experienced in developing both front and back end.<br/><br/>

                      In private life I love dancing and playing volleyball. Rollerblading is so much fun as well and ohh.. almost forgot about piano <i className="fa fa-heart" aria-hidden="true"></i></p>
                  </Scene>
                </Controller>
              </div>
            </div>
              <div className="content">
                  
              </div>
          </div>

            {/* -----dynamic blur-----*/}
            <div className="parallax-container no-padding flex">
              <Parallax
                  blur={{ min: -15, max: 15 }}
                  bgImage={require('./resources/pics/desk.jpg')}
                  bgImageAlt="The desk"
                  strength={200}
                  style={{ height: '500px' }}
                  contentClassName="react-parallax-content custom-one"
                  disabled={this.state.parallaxDisabled}
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

          <div id="work" className="content-wrapper content-wrapper-shape">
            <div className="row">
              <div className="col s10 offset-s1 m8 offset-m2">
              <Controller>
                <Scene 
                  classToggle={("#my-work-header", "faded-in")}
                  triggerHook="1">
                  <h2 id="my-work-header" className="section-title fade-in">My work</h2>
                </Scene>
                <Scene 
                  classToggle={("#my-work-p", "faded-in")}
                  triggerHook="0.95">
                  <p id="my-work-p" className="fade-in">Below are some examples of what i've worked on.</p>
                  </Scene>
              </Controller>
              </div>
              <Controller>
                <Scene 
                  classToggle={("#jumbo1", "faded-in")}
                  triggerHook="0.9">
                  <div id="jumbo1" className="col s10 offset-s1 m8 offset-m2 jumbotron jumbotron-custom-bg fade-in">
                    <div className="row">
                      <div className="col s12 m8">
                        <h3>Planner app for beauty salon </h3>
                        <p>This application was created to help beauty salon get rid of paper planners.</p>
                        <p>Written with:<br/>Java (Spring Boot), React.js, MongoDB</p>
                        <a className="waves-effect waves-light btn btn-margin btn-background" href="https://github.com/XareeN/UrodaManagementApplication">
                          <i className="fa fa-code icon-margin" aria-hidden="true"></i>
                          View source code
                        </a>
                        <a className="waves-effect waves-light btn btn-margin btn-background disabled" href="#home">
                          <i className="fa fa-info-circle icon-margin" aria-hidden="true"></i>
                          More info
                        </a>
                      </div>
                      <div className="col s12 m4">
        
                      </div>
                    </div>
                  </div>
                </Scene>
                <Scene 
                  classToggle={("#jumbo2", "faded-in")}
                  triggerHook="1">
                  <div id="jumbo2" className="col s10 offset-s1 m8 offset-m2 jumbotron jumbotron-custom-bg fade-in">
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
                          <a className="waves-effect waves-light btn btn-margin btn-background disabled" href="#home">
                            <i className="fa fa-info-circle icon-margin" aria-hidden="true"></i>
                            More info
                          </a>
                        </div>
                        <div className="col s12 m4">
        
                        </div>
                    </div>
                  </div>
                </Scene>
                <Scene 
                  classToggle={("#jumbo3", "faded-in")}
                  triggerHook="1">
                  <div id="jumbo3" className="col s10 offset-s1 m8 offset-m2 jumbotron jumbotron-custom-bg fade-in">
                    <div className="row">
                      <div className="col s12 m8">
                        <h3>Stopwatch </h3>
                        <p>A basic stopwatch with common functions</p>
                        <p>Written with:<br/>React Native</p>
                        <a className="waves-effect waves-light btn btn-margin btn-background" href="https://github.com/XareeN/stopwatch">
                          <i className="fa fa-code icon-margin" aria-hidden="true"></i>
                          View source code
                        </a>
                        <a className="waves-effect waves-light btn btn-margin btn-background disabled" href="#home">
                          <i className="fa fa-info-circle icon-margin" aria-hidden="true"></i>
                          More info
                        </a>
                      </div>
                      <div className="col s12 m4">
        
                      </div>
                    </div>
                  </div>
                </Scene>
                <Scene 
                  classToggle={("#jumbo4", "faded-in")}
                  triggerHook="1">
                  <div id="jumbo4" className="col s10 offset-s1 m8 offset-m2 jumbotron jumbotron-custom-bg fade-in">
                    <div className="row">
                      <div className="col s12 m8">
                        <h3>This portfolio site :) </h3>
                        <p>I know, I know. Just.. let it happen.</p>
                        <p>Written with:<br/>React.js</p>
                        <a className="waves-effect waves-light btn btn-margin btn-background" href="https://github.com/XareeN/infoWebsite">
                          <i className="fa fa-code icon-margin" aria-hidden="true"></i>
                          View source code
                        </a>
                      </div>
                      <div className="col s12 m4">
        
                      </div>
                    </div>
                  </div>
                </Scene>
              </Controller>
            </div>
          </div>
    
          <div className="parallax-container no-padding flex">
            <Parallax
                blur={{ min: -15, max: 15 }}
                bgImage={require('./resources/pics/work.jpg')}
                bgImageAlt="Working on a laptop"
                strength={200}
                style={{ height: '500px' }}
                contentClassName="react-parallax-content custom-one"
                disabled={this.state.parallaxDisabled}
            >
                <div className="row">
                  <div className="col s8 offset-s2 m4 offset-m4">
                    <div className="jumbotron">
                        <p>If I got your attention, let me know by contacting me!</p>
                    </div>
                  </div>
                </div>
            </Parallax>
          </div>

          <div id="contacts" className="content-wrapper contacts-section-shape" distortion="2vh">
            <div className="row">
              <div className="col s10 offset-s1 m8 offset-m2">
                <Controller>
                  <Scene 
                    classToggle={("#contacts-header", "faded-in")}
                    triggerHook="1">
                    <h2 id="contacts-header" className="section-title fade-in">Contacts</h2>
                  </Scene>
                  <Scene 
                    classToggle={("#contact-links", "faded-in")}
                    triggerHook="0.95">
                    <div id="contact-links" className="col s12 flex links fade-in">
                      <div className="jumbotron jumbotron-custom-bg-trans jumbotron-custom-box-shadow">
                        <a href="https://www.linkedin.com/in/adbigaj/"><p><i className="fa fa-linkedin-square icon-margin" aria-hidden="true"></i>LinkedIn profile</p></a>
                        <a href="https://github.com/XareeN"><p className="link-text"><i className="fa fa-github icon-margin" aria-hidden="true"></i>Github account</p></a>
                        <p><i className="fa fa-envelope-o icon-margin" aria-hidden="true"></i>adam.bigaj@interia.eu</p>
                        <p><i className="fa fa-phone icon-margin" aria-hidden="true"></i>+48 723 880 132</p>
                      </div>
                    </div>
                  </Scene>
                </Controller>
    
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
