import React, { Component, useState } from "react";
import { useTransition, animated } from 'react-spring'
import { animated as animated2 } from 'react-spring'


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
import ButtonShowMoreM from './components/ButtonShowMoreM';
import ButtonShowLessM from './components/ButtonShowLessM';
import ButtonShowMoreC from './components/ButtonShowMoreC';
import ButtonShowLessC from './components/ButtonShowLessC';
import Chatbot from "./components/Chatbot";
import Contact from "./components/Contact";
import Video from './components/Video';
import { NONAME } from "dns";


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
var hideShowM = true;
var hideShowC = true;
const Home = () => {
  const [show, set] = React.useState(false)
  const transitions = useTransition(show, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },


  })
  const [show2, set2] = React.useState(false)
  const transitions2 = useTransition(show2, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },


  })
  const handleShowMoreClickMMdE = (selected) => {
    set(animated => {
      hideShowM = false;
      return true
    })

  }
  const handleShowLessClickMMdE = (selected) => {
    set(animated => {
      hideShowM = true;
      return false
    })
  }
  const handleShowMoreClickChatbot = (selected2) => {
    set2(animated2 => {
      hideShowC = false;
      return true
    })
  }
  const handleShowLessClickChatbot = (selected2) => {
    set2(animated2 => {
      hideShowC = true;
      return false
    })
  }
  return (
    <>
      <Navigation className="contShadow" />
      <Choice className="contShadow" />
      <MMdE />
      {hideShowM ? <ButtonShowMoreM clickSelectedMMdE={handleShowMoreClickMMdE} /> : null}
      {transitions.map(({ item, key, props }) =>
        item && <animated.div key={key} style={props}>
          <MMdE_Slider />
          <MMdE_SubpageThree />
          <ButtonShowLessM clickSelectedMMdE={handleShowLessClickMMdE} />
        </animated.div>
      )}
      <Chatbot />
      {hideShowC ? <ButtonShowMoreC clickSelectedChatbot={handleShowMoreClickChatbot} /> : null}
      {
        transitions2.map(({ item, key, props }) =>
          item && <animated2.div key={key} style={props}>
            <Chatbot_SubpageOne />
            <Chatbot_SubpageTwo />
            <ButtonShowLessC clickSelectedChatbot={handleShowLessClickChatbot} />
          </animated2.div>
        )
      }
      <Video />
      <Contact />
    </>
  );
};




export default App;








