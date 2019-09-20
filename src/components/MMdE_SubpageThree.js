import React, { Component } from "react";

// import img1 from "./../assets/images/slider/telefon_1.png"
// import img2 from "./../assets/images/slider/telefon_2.png"
// import img3 from "./../assets/images/slider/telefon_3.png"

class MMdE_SubpageThree extends Component {
    render() {
        return (
            <>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <section className='MMdE_SubpageThree' id='MMdE_SubpageThree' >
                                <div className='row'>
                                    <div className='col-12'>
                                        <div className='MMdE_SubpageThree__description'>
                                            <h1 className='MMdE_SubpageThree__title'>Asystent dostępny 24/7, automatyzacja najczęstszych pytań</h1>
                                            {/* <h2 className='MMdE_SubpageThree__subtitle'>stworzeniu zestawu proponowanych pytań z odpowiedzią na każde z nich</h2> */}
                                            <div className='MMdE_SubpageThree__text'>
                                                <span><strong>stworzeniu zestawu proponowanych pytań z odpowiedzią na każde z nich</strong></span>
                                                <span><strong>automatyzacji pytań w formie tekstowej przy użyciu przetwarzania języka naturalnego (NLP)</strong></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-12'>
                                        <div className="MMdE_SubpageThree_graphics">
                                            <img className='graphics' alt='MM_ikona' src="images/MMdE_SubpageThree/telefon_6.png" />
                                            <img className='graphics' alt='MM_ikona' src="images/MMdE_SubpageThree/telefon_6.png" />
                                            <img className='graphics' alt='MM_ikona' src="images/MMdE_SubpageThree/telefon_6.png" />
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

export default MMdE_SubpageThree;  