import React, { Component } from "react";
// import img1 from "./../assets/images/slider/telefon_1.png"
// import img2 from "./../assets/images/slider/telefon_2.png"


class Chatbot_SubpageTwo extends Component {

    render() {
        return (
            <>

                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <section className={`Chatbot_SubpageTwo ${this.props.classAnimationChatbot}`} id='Chatbot_SubpageTwo' >
                                <div className='row'>
                                    <div className='col-12'>
                                        <div className='Chatbot_SubpageTwo__description'>
                                            <h1 className='Chatbot_SubpageTwo__title'>Interakcja z użytkownikiem poprzez quizy spersonalizowane oferty</h1>
                                            <div className='Chatbot_SubpageTwo__text'>
                                                <span><strong>quiz lub test preferencjipomagający wybrać produkt</strong></span>
                                                <span><strong>przedstawienie oferty w wybrany sposób</strong></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-12'>
                                        <div className="Chatbot_SubpageTwo_graphics">
                                            <img className='graphics' alt='MM_ikona' src="images/Chatbot_SubpageTwo/telefon_13.png" />
                                            <img className='graphics' alt='MM_ikona' src="images/Chatbot_SubpageTwo/telefon_12.png" />
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Chatbot_SubpageTwo;


