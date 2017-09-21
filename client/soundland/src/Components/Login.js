import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password_digest: '',
      fireRedirect: false,
    }
  }

  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    
    this.setState({
      [name]: value,
    });
  }

  handleFormSubmit(event) {
      event.preventDefault();

      let data = {
        username: this.state.username,
        password_digest: this.password_digest
      }
        //routes here are not valid revist
      axios({
        method: 'POST',
        url: 'http://localhost:3001/auth/',
        data
      })
      .then(res => {
        console.log(res.data);
        this.setState({
          id: res.data.id,
          //The res.data.id might be wrong here
          fireRedirect: true,
        });
      }).catch(err=> console.log(err));
      event.target.reset();
    } 
  }

  render() {
    return(
      <div className="login">

        <div className="login-top">
          <img className="profile-icon"
          src="https://d30y9cdsu7xlg0.cloudfront.net/png/898318-200.png"/>
          <h3>Login</h3>
        </div>

        <div className="login-form">
          <form onSubmit={this.handleFormSubmit}>
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password_digest"
              minLength="6" required 
              value={this.state.password_digest}
              onChange={this.handleInputChange}
            />
            <input
              type="submit"
              value="Submit"
            />
          </form>
          {this.state.fireRedirect
          ? <Redirect push to={`/user/${this.state.id}`} />
          : ''}
        </div>

      </div>
    )
  }

export default Login;