import React, { Component } from "react";

class Choice extends Component {

    render() {
        return (
            <section>

                <div className='Choice__bgc'>

                    <div className='container'>
                        <div className='row'>
                            <div className='col-12'>
                                <section className='Choice'>
                                    <div className='Mobile' data-aos="fade-up">
                                        <div className='Mobile__chat'>
                                            <img className='chat__custom-chat' alt='ikonka mess' src="images/custom-chat.png"
                                                data-aos="zoom-in" data-aos-delay="2000" />
                                            <img className='chat__logo' alt='ikonka logo' src="images/cbot1.svg" />

                                            <span className='chat__q1'> Chcesz zwiększyć sprzedaż i zbudować relację ze swoim klientem?
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
                                        <div></div>
                                    </div>
                                </section>

                            </div>
                        </div>
                    </div>
                </div>


            </section>

        )

    }
}

export default Choice;

