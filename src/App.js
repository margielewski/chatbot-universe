import React, { Component } from "react";
import { useTransition, animated } from 'react-spring'

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
import ButtonShowMoreM from './components/ButtonShowMoreM'
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



const Home = () => {
  const [show, set] = React.useState(false)
  const transitions = useTransition(show, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },


  })


  const handleShowMoreClickMMdE = (selectedMoreMMdE) => {
    set(animated => {
      console.log(animated)
      return !animated
    })
  }


  return (

    <>
      <Navigation />
      <Choice />
      <MMdE />
      <ButtonShowMoreM clickSelectedMMdE={handleShowMoreClickMMdE} />
      {transitions.map(({ item, key, props }) =>
        item && <animated.div key={key} style={props}>
          <MMdE_Slider />
          <MMdE_SubpageThree />
        </animated.div>
      )}


      <Chatbot />
      <Chatbot_SubpageOne />
      <Chatbot_SubpageTwo />
      <Video />
      <Contact />
    </>
  );
};




export default App;








