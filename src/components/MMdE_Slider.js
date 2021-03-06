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
            <section className="contShadow">
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <section className={`MMdE_Slider ${this.props.classAnimationMMdE}`} id='MMdE_Slider' >
                                <div className='row'>
                                    <div className='col-12'>
                                        <div className='MMdE_Slider__description'>
                                            <h1 className='MMdE_Slider__title' data-aos="fade-right">Zwiększenie konwersji z użyciem Messengera</h1>
                                            <h2 className='MMdE_Slider__subtitle' data-aos="fade-left">Wysyłanie powiadomień o porzuconym koszyku w sklepie online</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-12'>
                                        <div className="container_Slider" data-aos="zoom-in" data-aos-offset="300">
                                            <Slide {...properties} id="showMe">
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
            </section>
        )
    }
}

export default MMdE_Slider;  