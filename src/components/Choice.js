import React, { Component } from "react";
import Mobile_image from '../assets/images/iPhone-6S-Space-Gray-copy.png'
// import { Link, } from 'react-router-dom';
// import { Link, animateScroll as scroll } from "react-scroll";

class Choice extends Component {
    render() {

        return (
            <>
                <div className='Choice__bgc'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12'>
                                <section className='Choice'>
                                    <div className='Mobile'>
                                        <div className='Mobile__chat'>
                                            <img className='chat__custom-chat' alt='ikonka rakieta niebieska' src="images/custom-chat.png" />
                                            <img className='chat__logo' alt='ikonka rakieta niebieska' src="images/cbot1.svg" />
                                            {/* <img className='chat__logo' alt='ikonka rakieta niebieska' src="images/logo-ikonka.png" /> */}
                                            <span className='chat__q1'>Chcesz zwiększyć sprzedaż i zbudować relację ze swoim klientem?
                                        <img className='a1__rocket' alt='ikonka rakieta niebieska' src="images/rakieta_niebieska.png" />
                                            </span>
                                            <span className='chat__a1'>Messenger Marketing
                                        <img className='a1__rocket' alt='ikonka rakieta niebieska' src="images/rakieta_niebieska.png" />
                                            </span>
                                            <span className='chat__q2'>Chcesz zautomatyzować procesy i obsługę klienta w swojej firmie?
                                        <img className='a1__rocket' alt='ikonka rakieta niebieska' src="images/rakieta_fiolet.png" />
                                            </span>
                                            <span className='chat__a2'>Chatbot
                                        <img className='a1__rocket' alt='ikonka rakieta niebieska' src="images/rakieta_fiolet.png" />
                                            </span>
                                        </div>
                                    </div>
                                </section>

                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default Choice;  