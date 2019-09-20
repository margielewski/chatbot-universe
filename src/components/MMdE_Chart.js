import React, { Component } from "react";

// import img1 from "./../assets/images/slider/telefon_1.png"
// import img2 from "./../assets/images/slider/telefon_2.png"
// import img3 from "./../assets/images/slider/telefon_3.png"

class MMdE_Chart extends Component {
    render() {
        return (
            <>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <section className='MMdE_Chart' id='MMdE_Chart' >
                                <div className='row'>
                                    <div className='col-12'>
                                        <div className='MMdE_Chart__description'>
                                            <h1 className='MMdE_Chart__title'>Messenger_vs email</h1>
                                            <h2 className='MMdE_Chart__subtitle'>Porównanie Open Rate (współczynnika otwarć) i CTR (współczynnika klikalności) dla Messengera i emaila:</h2>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className='row'>
                                    <div className='col-12'>
                                        <div className="MMdE_Chart_graphics">
                                        </div>
                                    </div>
                                </div> */}
                            </section>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default MMdE_Chart;  