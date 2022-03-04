import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  render() {
    return (
    <div> {6+5} test ici </div>

    )
  }
}


export default App


if(document.getElementById('root')){
    ReactDOM.render(<App />,document.getElementById('root'));
}