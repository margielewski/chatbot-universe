import React, { Component } from "react";
// ten import ponizej nie dziala
// import { Spring } from "react-spring"; 

// dzialajacy import Spring
import { Spring, interpolate } from 'react-spring/renderprops'

import Mobile_image from '../assets/images/iPhone-6S-Space-Gray-copy.png'
// import { Link, } from 'react-router-dom';
// import { Link, animateScroll as scroll } from "react-scroll";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
    duration: 800,
    offset: 120,
    delay: 500,
});


class Choice extends Component {
    state = {
        content: null,
    }
    componentDidMount() {
        let url = 'http://chatbotest.xyz:1337/Choices';
        fetch(url).then(response => response.json()).then((repos) => {

            this.setState({
                content: repos
            });

        });

    }
    render() {
        if (this.state.content == null) {
            return null;
        } else {
            const { content } = this.state;
            const arr = content.map(i => i.title);
            return (
                <>
                    {/* <Spring
                        from={{ opacity: 0, marginTop: -500, scroll: 100 }}
                        to={{ opacity: 1, marginTop: 0, scroll: 200 }}
                    >
                        {props => (
                            <div style={props}> */}
                    {/*  */}
                    <div className='Choice__bgc' data-aos="fade-up">
                        <div className='container'>
                            <div className='row'>
                                <div className='col-12'>
                                    <section className='Choice'>
                                        <div className='Mobile'>
                                            <div className='Mobile__chat'>
                                                <img className='chat__custom-chat' alt='ikonka rakieta niebieska' src="images/custom-chat.png" />
                                                <img className='chat__logo' alt='ikonka rakieta niebieska' src="images/cbot1.svg" />
                                                {/* <img className='chat__logo' alt='ikonka rakieta niebieska' src="images/logo-ikonka.png" /> */}
                                                <span className='chat__q1'>{arr[0]}
                                                    <img className='a1__rocket' alt='ikonka rakieta niebieska' src="images/rakieta_niebieska.png" />
                                                </span>
                                                <span className='chat__a1'>{arr[1]}
                                                    <img className='a1__rocket' alt='ikonka rakieta niebieska' src="images/rakieta_niebieska.png" />
                                                </span>
                                                <span className='chat__q2'>{arr[2]}
                                                    <img className='a1__rocket' alt='ikonka rakieta niebieska' src="images/rakieta_fiolet.png" />
                                                </span>
                                                <span className='chat__a2'>{arr[3]}
                                                    <img className='a1__rocket' alt='ikonka rakieta niebieska' src="images/rakieta_fiolet.png" />
                                                </span>
                                            </div>
                                        </div>
                                    </section>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    {/* </div>
                        )}
                    </Spring> */}
                </>
            )
        }
    }
}

export default Choice;


//

// {/* <Spring>
//     {props => (
//         <div style={props}>

//             tutaj wklejamy co chcemy animować

//          </div>
//     )}
// </Spring>  */}