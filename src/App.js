import React, { Component } from "react";
// import ReactDOM from 'react-dom';

// podpięcie font-awesome
import './fonts/fontawesome/fontawesome-free-5.10.1-web/css/fontawesome.min.css';

import './main.scss';

// Router
import {
  BrowserRouter,
  Route,
  // Link,
  Switch,
  // NavLink,
} from 'react-router-dom';

// Components

import Navigation from './components/Navigation';
import Choice from "./components/Choice";
import MMdE from "./components/MMdE";
import Chatbot from "./components/Chatbot";
import Contact from "./components/Contact";


class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          {/* <Route path='/projects/:id' component={Project} /> */}
        </Switch>
      </BrowserRouter>
    )
  }
}

class Home extends Component {

  render() {
    return (
      <>
        <Navigation />
        <Choice />
        <MMdE />
        <Chatbot />
        <Contact />
      </>
    )
  }
}

export default App;