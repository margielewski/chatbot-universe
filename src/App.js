import React, { Component } from "react";
// import ReactDOM from 'react-dom';

import './main.scss';

// Router
import {
  HashRouter,
  Route,
  // Link,
  Switch,
  // NavLink,
} from 'react-router-dom';

// Components

import Navigation from './components/Navigation';
import Choice from "./components/Choice";
import MMdE from "./components/MMdE";


class App extends Component {
  render() {

    return (
      <HashRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          {/* <Route path='/projects/:id' component={Project} /> */}
        </Switch>
      </HashRouter>
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
      </>
    )
  }
}

export default App;