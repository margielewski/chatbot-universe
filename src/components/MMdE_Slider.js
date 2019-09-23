import React, { Component } from "react";
import { Slide } from "react-slideshow-image"

import img1 from "./../assets/images/slider/telefon_1.png"
import img2 from "./../assets/images/slider/telefon_2.png"
import img3 from "./../assets/images/slider/telefon_3.png"

const properties = {
    duration: 6000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    onChange: (oldIndex, newIndex) => {
        console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
}

class MMdE_Slider extends Component {
    render() {
        return (
            <>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <section className={`MMdE_Slider ${this.props.action}`} id='MMdE_Slider' >
                                <div className='row'>
                                    <div className='col-12'>
                                        <div className='MMdE_Slider__description'>
                                            <h1 className='MMdE_Slider__title'>Zwiększenie konwersji z użyciem Messengera</h1>
                                            <h2 className='MMdE_Slider__subtitle'>Wysyłanie powiadomień o porzuconym koszyku w sklepie online</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-12'>
                                        <div className="container_Slider">
                                            <Slide {...properties}>
                                                <div className="each-slide">
                                                    <div>
                                                        <img src={img1} alt="img1" />
                                                    </div>
                                                </div>
                                                <div className="each-slide">
                                                    <div>
                                                        <img src={img2} alt="img2" />
                                                    </div>
                                                </div>
                                                <div className="each-slide">
                                                    <div>
                                                        <img src={img3} alt="img3" />
                                                    </div>
                                                </div>
                                            </Slide>
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

export default MMdE_Slider;  