import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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

import EventsAdd from  './Components/Events/EventsForm';
import EventsEdit from './Components/Events/EventsEdit';
import EventsShow from './Components/Events/EventsShow';
import EventsList from './Components/Events/EventsList';
import Events from     './Components/Events/Events';

//set up according to https://medium.freecodecamp.org/beginner-s-guide-to-react-router-53094349669
const NotFound = () => <h1>404.. This page is not found!</h1>
let userLogged = false;
const PageLayout = ({ children }) => <div>{userLogged?<Header2 />:<Header />}{children}</div>

  //state: false check for auth: if true set state: true
class App extends Component {
  constructor() {
    super();
    this.state = {
      userName:'Guest'
    }
  this.setUserName = this.setUserName.bind(this)
  }

  setUserName(userName) {
    this.state({userName:`${userName}`})
  }
  
  render() {
    return (
      <Router>
        <div className="App">
          <Route        path="/"                   component={PageLayout} />
            <Route exact path="/"                  component={Search} />
            <Route      path="/about"              component={About} />
            <Route      path="/venues"             component={Venues} />
            <Route      path="/auth" />
            <Route      path="/login"              component={Login} />
            <Route      path="/register"           component={Register} />
            <Route      path="/user"               component={User} />
            <Route      path="/Events" />
            <Route exact path="/Events"            component={Events} />
            <Route      path="/Form"               component={EventsAdd} />
            <Route      path="/Edit/:id"           component={EventsEdit} />
            <Route      path="/Show/:id"           component={EventsShow} />
            <Route      path="/List"               component={EventsList} />
          <Route path='*'                          render={Footer} />
        </div>
      </Router>
    );
  }
}

export default App;
