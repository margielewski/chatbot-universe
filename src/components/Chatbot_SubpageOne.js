import React, { Component } from "react";

// import img1 from "./../assets/images/slider/telefon_1.png"
// import img2 from "./../assets/images/slider/telefon_2.png"


class Chatbot_SubpageOne extends Component {
    render() {
        return (
            <>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <section className='Chatbot_SubpageOne' id='Chatbot_SubpageOne' >
                                <div className='row'>
                                    <div className='col-12'>
                                        <div className='Chatbot_SubpageOne__description'>
                                            <h1 className='Chatbot_SubpageOne__title'>Chatbot wyzwalany komentarzami pod postem</h1>
                                            <div className='Chatbot_SubpageOne__text'>
                                                <span>Interakcja z użytkownikiem <strong>_24/7</strong></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-12'>
                                        <div className="Chatbot_SubpageOne_graphics">
                                            <img className='graphics' alt='MM_ikona' src="images/Chatbot_SubpageOne/telefon_1.png" />
                                            <img className='graphics' alt='MM_ikona' src="images/Chatbot_SubpageOne/telefon_1.png" />
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

export default Chatbot_SubpageOne;