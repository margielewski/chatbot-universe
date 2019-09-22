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
import MMdE_Slider from "./components/MMdE_Slider";
import MMdE_Chart from "./components/MMdE_Chart";
import MMdE_SubpageThree from "./components/MMdE_SubpageThree";
import Chatbot_SubpageOne from "./components/Chatbot_SubpageOne";
import Chatbot_SubpageTwo from "./components/Chatbot_SubpageTwo";
import ButtonShowMore from './components/ButtonShowMore';
import ButtonShowLess from './components/ButtonShowLess';

import Chatbot from "./components/Chatbot";
import Contact from "./components/Contact";
import Video from './components/Video';


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
  state = {
    selectedUser: false // tutaj
  };
  onUserSelected = (selectedUser) => {
    this.setState({
      selectedUser
    });

  }
  render() {

    return (
      <>
        <Navigation />
        <Choice />
        <MMdE />
        {this.state.selectedUser ? null : <ButtonShowMore userSelected={this.onUserSelected} />}
        {this.state.selectedUser ? <><MMdE_Slider /> <MMdE_SubpageThree /><ButtonShowLess userSelected={this.onUserSelected} /></> : null}
        {/* <MMdE_Chart /> */}
        <Chatbot />
        <Chatbot_SubpageOne />
        <Chatbot_SubpageTwo />
        <Video />
        <Contact />


      </>
    )
  }
}

export default App;