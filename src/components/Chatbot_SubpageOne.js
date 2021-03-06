import React, { Component } from "react";

// import img1 from "./../assets/images/slider/telefon_1.png"
// import img2 from "./../assets/images/slider/telefon_2.png"


class Chatbot_SubpageOne extends Component {
    render() {
        return (
            <section className="contShadow">
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <section className={`Chatbot_SubpageOne ${this.props.classAnimationChatbot}`} id='Chatbot_SubpageOne' >
                                <div className='row'>
                                    <div className='col-12'>
                                        <div className='Chatbot_SubpageOne__description'>
                                            <h1 className='Chatbot_SubpageOne__title'
                                                data-aos="fade-right" id="anchoring3" data-aos-anchor="#showChatbotSubpageOne">
                                                Chatbot wyzwalany komentarzami pod postem</h1>
                                            <div className='Chatbot_SubpageOne__text'
                                                data-aos="fade-left" id="anchoring3" data-aos-anchor="#showChatbotSubpageOne">
                                                <span>Interakcja z użytkownikiem <strong>_24/7</strong></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-12'>
                                        <div className="Chatbot_SubpageOne_graphics" id="showChatbotSubpageTwo">
                                            <img className='graphics' data-aos="zoom-in" data-aos-delay="1500" alt='MM_ikona' src="images/Chatbot_SubpageOne/telefon_11.png" />
                                            <img className='graphics' data-aos="zoom-in" data-aos-delay="2000" alt='MM_ikona' src="images/Chatbot_SubpageOne/telefon_10.png" />
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Chatbot_SubpageOne;