import React, { Component } from 'react'

export class Contactwithclass extends Component {

    state={
      email: '',
      password: '',
    }

handleremail = (e) => {

  this.setState({email: e.target.value})

};

handlerpassword = (e) => {

  this.setState({password: e.target.value})

}

  render() {
    return (
      <>
      <h1>  formulaire with class  </h1>
      <input  value={this.state.email}   onChange={this.handleremail}   placeholder="Email" />
      <input  value={this.state.password}   onChange={this.handlerpassword}   placeholder="Password" />
      </>
    )
  }
}

export default Contactwithclass