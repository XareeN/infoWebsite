import React, {Component, lazy, Suspense} from 'react';
// import './App.css';
import './resources/css/style.css';
import './resources/css/style_advanced.css';
import './resources/css/font-awesome.min.css';

const LandingPage = lazy(() => import('./LandingPage'));


export default class App extends Component {

  constructor(){
    super();
    this.state = {
      isLoading: true
    }
  }

  componentDidMount(){
    this.setState({
      isLoading: false
    })

  }

  render(){
    return (
      <div className="App">
        <Suspense fallback={
          <div>Loading...</div>
        }>
          {/* this.state.isLoading ? *showLoadingScreen* : *yourPage()* */}
          <LandingPage/>
        </Suspense>
      </div>
    );
  }
}

// export default App;
