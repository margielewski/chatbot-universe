import React, { Component } from "react";
// import img1 from "./../assets/images/slider/telefon_1.png"
// import img2 from "./../assets/images/slider/telefon_2.png"


class Chatbot_SubpageTwo extends Component {

    render() {
        return (
            <section className="contShadow">

                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <section className={`Chatbot_SubpageTwo ${this.props.classAnimationChatbot}`} id='Chatbot_SubpageTwo' >
                                <div className='row'>
                                    <div className='col-12'>
                                        <div className='Chatbot_SubpageTwo__description'>
                                            <h1 className='Chatbot_SubpageTwo__title' data-aos="fade-right" id="anchoring4" data-aos-anchor="#showChatbotSubpageTwo"
                                                data-aos-offset="600">Interakcja z użytkownikiem poprzez quizy spersonalizowane oferty</h1>
                                            <div className='Chatbot_SubpageTwo__text'>
                                                <span data-aos="fade-left" id="anchoring4" data-aos-anchor="#showChatbotSubpageTwo"
                                                    data-aos-offset="600"><strong>quiz lub test preferencjipomagający wybrać produkt</strong></span>
                                                <span data-aos="fade-right" id="anchoring4" data-aos-anchor="#showChatbotSubpageTwo"
                                                    data-aos-offset="600"><strong>przedstawienie oferty w wybrany sposób</strong></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-12'>
                                        <div className="Chatbot_SubpageTwo_graphics">
                                            <img className='graphics'
                                                id="anchoring4" data-aos-anchor="#showChatbotSubpageTwo" data-aos="zoom-in" data-aos-delay="1500" data-aos-offset="600" alt='MM_ikona' src="images/Chatbot_SubpageTwo/telefon_13.png" />
                                            <img className='graphics'
                                                id="anchoring4" data-aos-anchor="#showChatbotSubpageTwo" data-aos="zoom-in" data-aos-delay="2000" data-aos-offset="600" alt='MM_ikona' src="images/Chatbot_SubpageTwo/telefon_12.png" />
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

export default Chatbot_SubpageTwo;


