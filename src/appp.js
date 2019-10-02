import React, { Component } from "react";
import { Transition, animate } from 'react-spring'

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
        showHideComponentMMdE: false,
        classAnimationMMdE: null,
        selectedMMdE: false,
        showHideComponentChatbot: false,
        classAnimationChatbot: null,
        selectedChatbot: false,
    }

    handleShowLessClickMMdE = (selectedLessMMdE) => {
        this.setState({
            classAnimationMMdE: 'hide',
            selectedLessMMdE

        })
        setTimeout(() => {
            this.setState({
                showHideComponentMMdE: false,
            })
        }, 2000);

    }
    handleShowMoreClickChatbot = (selectedMoreChatbot) => {
        this.setState({

            showHideComponentChatbot: true,
            classAnimationChatbot: 'show',
            selectedMoreChatbot
        });
    }
    handleShowLessClickChatbot = (selectedLessChatbot) => {
        this.setState({
            classAnimationChatbot: 'hide',
            selectedLessChatbot

        })
        setTimeout(() => {
            this.setState({
                showHideComponentChatbot: false,
            })
        }, 2000);

    }
    render() {
        // console.log(this.state, 'state<---<---<---')
        return (
            <>

                <Navigation />
                <Choice />
                <MMdE />

                {this.state.showHideComponentMMdE ? null :
                    <ButtonShowMoreM clickSelectedMMdE={this.handleShowMoreClickMMdE} />
                }
                {this.state.showHideComponentMMdE ?
                    <>
                        <MMdE_Slider classAnimationMMdE={this.state.classAnimationMMdE} />
                        <MMdE_SubpageThree classAnimationMMdE={this.state.classAnimationMMdE} />
                        <ButtonShowLessM clickSelectedMMdE={this.handleShowLessClickMMdE} />
                    </> : null}


                {/* <MMdE_Chart /> */}
                <Chatbot />
                {this.state.showHideComponentChatbot ? null :
                    <ButtonShowMoreC clickSelectedChatbot={this.handleShowMoreClickChatbot} />
                }
                {this.state.showHideComponentChatbot ?
                    <>
                        <Chatbot_SubpageOne classAnimationChatbot={this.state.classAnimationChatbot} />
                        <Chatbot_SubpageTwo classAnimationChatbot={this.state.classAnimationChatbot} />
                        <ButtonShowLessC clickSelectedChatbot={this.handleShowLessClickChatbot} />
                    </> : null}
                <Video />
                <Contact />


            </>
        )
    }
}

export default App;