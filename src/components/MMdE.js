import React, { Component } from "react";
// import { Link, } from 'react-router-dom';
// import { Link, animateScroll as scroll } from "react-scroll";

class MMdE extends Component {
    render() {

        return (
            <>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <section className='MMdE'>
                                <div className='row'>
                                    <div className='col-12'>
                                        <div className='MMdE__description'>
                                            <h1 className='MMdE__title'>Messenger Marketing dla Ecomers</h1>
                                            <h2 className='MMdE__subtitle'>Korzyści_jak działa?</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className='MMdE__scheme'>
                                    <div className='row'>
                                        <div className='col-12'>
                                            <div className='Scheme-first'>
                                                <CircleTextUp description="zwiększenie sprzedaży/ konwersji sklepu" src="images/MM_ikona-1.png" />
                                                <div className='Scheme-first__arrows'>
                                                    <i className="fa fa-chevron-right"></i><i className="fa fa-chevron-right"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <div className='Scheme-second'>
                                                <CircleTextDown description="pozyskiwanie subskrybentów" src="images/MM_ikona-2.png" />
                                                <div className='Scheme-first__arrows'>
                                                    <i className="fa fa-chevron-right"></i><i className="fa fa-chevron-right"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-6'>
                                            <div className='Scheme-third'>
                                                <CircleTextDown description="wysyłanie wiadomości do subskrybentów" src="images/MM_ikona-3.png" />
                                                <div className='Scheme-first__arrows'>
                                                    <i className="fa fa-chevron-right"></i><i className="fa fa-chevron-right"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col-12'>
                                        <div className='MMdE__text'>
                                            <span><strong>docierasz do klientów </strong> w miejscu, w którym umawiają się na spotkania</span>
                                            <span>segmentujesz klientów <strong> badając ich reakcję </strong> </span>
                                            <span><strong>personalizujesz wiadomość</strong> swoich odbiorców</span>
                                            <div className='text__arrows'>
                                                <i className="fa fa-chevron-down"></i>
                                                <i className="fa fa-chevron-down"></i>
                                            </div>
                                            <button className='text__button'>Zobacz więcej</button>
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

// const SchemeList = [
//     {
//         description: ["zwiększenie sprzedaży/ konwersji sklepu", "pozyskiwanie subskrybentów", "wysyłanie wiadomości do subskrybentów"],
//         foto: ["../../assets/images/MM_ikona-1.png", "../../assets/images/MM_ikona-2.png", "../../assets/images/MM_ikona-3.png"]
//     }
// ]

class CircleTextUp extends Component {
    render() {

        return (
            <>
                <div className='row'>
                    <div className='col-12'>
                        <div className='Scheme'>
                            <span className='Scheme__description'>{this.props.description}</span>
                            <div className='Scheme__foto'>
                                <img className='foto__ikona' alt='MM_ikona' src={this.props.src} />
                                <img className='foto__obramowanie' alt='MM_ikona' src="images/MM_obramowanie.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

class CircleTextDown extends Component {
    render() {

        return (
            <>
                <div className='row'>
                    <div className='col-12'>
                        <div className='Scheme'>
                            <div className='Scheme__foto'>
                                <img className='foto__ikona' alt='MM_ikona' src={this.props.src} />
                                <img className='foto__obramowanie' alt='MM_ikona' src="images/MM_obramowanie.png" />
                            </div>
                            <span className='Scheme__description'>{this.props.description}</span>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}





export default MMdE;  