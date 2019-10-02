import React, { Component } from "react";
// import CircleTextDown from "./Chatbot";
// import Chatbot from "./Chatbot";

// import img1 from "./../assets/images/slider/telefon_1.png"
// import img2 from "./../assets/images/slider/telefon_2.png"
// import img3 from "./../assets/images/slider/telefon_3.png"

class MMdE_Chart extends Component {
    render() {
        return (
            <section className="contShadow">
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <section className='MMdE_Chart' id='MMdE_Chart' >
                                <div className='row'>
                                    <div className='col-12'>
                                        <div className='MMdE_Chart__description'>
                                            <h1 className='MMdE_Chart__title'>Messenger_vs email</h1>
                                            <h2 className='MMdE_Chart__subtitle'>Porównanie Open Rate (współczynnika otwarć) i CTR (współczynnika</h2>
                                            <h2 className='MMdE_Chart__subtitle'> klikalności) dla Messengera i emaila:</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-12'>
                                        <div className="MMdE_Chart__graphics">

                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-12'>
                                        <div className="MMdE_Chart__scheme">
                                            <div className='row'>
                                                <div className='col-6'>
                                                    <div className='Scheme__second'>
                                                        <CircleTextDown description="Messenger" src="images/MMdE_Chart/Messenger.png" />
                                                    </div>
                                                </div>
                                                <div className='col-6'>
                                                    <div className='Scheme__third'>
                                                        <CircleTextDown description="Mail" src="images/MMdE_Chart/Mail.png" />
                                                    </div>
                                                </div>
                                            </div>

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

class CircleTextDown extends Component {
    render() {

        return (
            <section>
                <div className='row'>
                    <div className='col-12'>
                        <div className='Scheme'>
                            <div className='Scheme__foto'>
                                <img className='foto__ikona' alt='MM_ikona' src={this.props.src} />
                                <img className='foto__obramowanie' alt='MM_ikona' src="images/boty_obramowanie.png" />
                            </div>
                            <span className='Scheme__description'>{this.props.description}</span>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default MMdE_Chart;  