import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter , Route , Switch , Link } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Contact from './Contact';

class App extends Component {

  render() {

    return (
      <BrowserRouter basename='react/public'>

                     
                <Link to="/home" > Home</Link>
                <Link to="/about" >About</Link>
                <Link to="/contact" > Contact</Link>
      
      <Switch>
            

             
                <Route path="/home" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>

         

         

         </Switch>
      </BrowserRouter>
    )
  }
}

export default App;

if(document.getElementById('root')){

ReactDOM.render(<App />, document.getElementById('root'));

}
