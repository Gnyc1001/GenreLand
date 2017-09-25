import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios'

import About from     './Components/AboutUs';
import Footer from    './Components/Footer';
import Header from    './Components/Header';
import Header2 from    './Components/Header2'; //will create an if statement later for logged toggle

import Search from    './Components/Search/Search';
import Results from   './Components/Search/results';

import Login from     './Components/Auth/Login';
import Register from  './Components/Auth/Registration';
import User from      './Components/Auth/User';

import Venues from    './Components/Venues';

import EventsForm from  './Components/Events/EventsForm';
import EventsEdit from './Components/Events/EventsEdit';
import EventsShow from './Components/Events/EventsShow';
import EventsList from './Components/Events/EventsList';
import Events from     './Components/Events/Events';

//set up auth.js according to https://medium.freecodecamp.org/beginner-s-guide-to-react-router-53094349669
const NotFound = () => <h1>404.. This page is not found!</h1>



  //state: false check for auth: if true set state: true
class App extends Component {
  constructor(){
    super();
    this.state = {
      user: {},
      loggedIn: false,
    }
    // this.loginAppSuccess = this.loginAppSuccess.bind(this)
    this.userDataForState = this.userDataForState.bind(this)
    this.PageLayout = this.PageLayout.bind(this)
  }

  // loginAppSuccess(data){
  PageLayout({ children }) {
    return <div>{this.state.loggedIn?<Header2 user={this.state.user}/>:<Header user={this.state.user}/>}{children}</div>
  }
  userDataForState(res){
    if(res.data.auth){
      this.setState({
        user: res.data.user,
        loggedIn: true,
    });
    } else{
    //event.target.reset();
    alert('Incorrect username or password!')
    }
  }
  



  render() {
    return (
      <Router>
        <div className="App">

          <Route path="/" component={this.PageLayout} />
            <Route exact path="/" render={ props => <Search user={this.state.user} /> } />
            <Route path="/about" component={About} />
            <Route exact path="/auth/login" render={ props => <Login userDataForState={this.userDataForState} /> } />
            <Route exact path="/auth/register" render={ props => <Register user={this.state.user} /> } />
            <Route exact path="/profile/:id" component={User} />
          <Route path="/Events" />
            <Route exact path="/Events" component={Events} />
            <Route exact path="/Events/Form" render = { props => <EventsAdd user={this.state.user} userDataForState={this.userDataForState} /> } />
            <Route path="/Edit/:id" render = { props => <EventsEdit userDataForState={this.userDataForState} /> } />
            <Route path="/Show/:id" component={EventsShow} />
            <Route path="/List" component={EventsList} />
          <Route path='*' render={Footer} />
        </div>
      </Router>
    );
  }
}

export default App;

/* 
<Route path="/venues" component={Venues} /> */