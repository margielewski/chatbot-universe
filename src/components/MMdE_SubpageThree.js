import React, { Component } from "react";

class MMdE_SubpageThree extends Component {
    render() {
        return (
            <section className="contShadow">
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <section className={`MMdE_SubpageThree ${this.props.classAnimationMMdE}`} id='MMdE_SubpageThree' >
                                <div className='row'>
                                    <div className='col-12'>
                                        <div className='MMdE_SubpageThree__description'>
                                            <h1 className='MMdE_SubpageThree__title'
                                                id="anchoring" data-aos-anchor="#showMe" data-aos="fade-right" data-aos-offset="800">
                                                Asystent dostępny 24/7, automatyzacja najczęstszych pytań
                                                </h1>

                                            <div className='MMdE_SubpageThree__text'>
                                                <span
                                                    id="anchoring" data-aos-anchor="#showMe" data-aos="fade-left" data-aos-offset="800">
                                                    <strong>stworzeniu zestawu proponowanych pytań z odpowiedzią na każde z nich</strong></span>
                                                <span
                                                    id="anchoring" data-aos-anchor="#showMe" data-aos="fade-right" data-aos-offset="800">
                                                    <strong>automatyzacji pytań w formie tekstowej przy użyciu przetwarzania języka naturalnego (NLP)</strong></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-12'>
                                        <div className="MMdE_SubpageThree_graphics" id="showButtonLessM">
                                            <img className='graphics'
                                                id="anchoring" data-aos-anchor="#showMe" data-aos="zoom-in" data-aos-delay="1000" data-aos-offset="800" alt='MM_ikona' src="images/MMdE_SubpageThree/telefon_9.png" />
                                            <img className='graphics'
                                                id="anchoring" data-aos-anchor="#showMe" data-aos="zoom-in" data-aos-delay="1500" data-aos-offset="800" alt='MM_ikona' src="images/MMdE_SubpageThree/telefon_7.png" />
                                            <img className='graphics'
                                                id="anchoring" data-aos-anchor="#showMe" data-aos="zoom-in" data-aos-delay="2000" data-aos-offset="800" alt='MM_ikona' src="images/MMdE_SubpageThree/telefon_8.png" />
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

export default MMdE_SubpageThree;  