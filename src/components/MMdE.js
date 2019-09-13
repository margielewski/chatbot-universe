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
                                                <Circle description="zwiększenie sprzedaży/ konwersji sklepu" img="../../assets/images/MM_ikona-1.png" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <div className='Scheme-second'>
                                                <Circle description="pozyskiwanie subskrybentów" img="../../assets/images/MM_ikona-2.png" />
                                            </div>
                                        </div>
                                        <div className='col-6'>
                                            <div className='Scheme-third'>
                                                <Circle description="wysyłanie wiadomości do subskrybentów" img="../../assets/images/MM_ikona-3.png" />
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
                                            <button>Zobacz więcej</button>
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

class Circle extends Component {
    render() {

        return (
            <>
                <div className='row'>
                    <div className='col-12'>
                        <div className='Scheme'>
                            <span className='Scheme__description'>{this.props.description}</span>
                            <div className='Scheme__foto'>
                                {/* <img className='foto-size' alt="obrazek1" src="../../assets/images/MM_ikona-1.png" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}





export default MMdE;  