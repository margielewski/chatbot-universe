import React, { Component } from "react";

// import { Link, } from 'react-router-dom';
// import { Link, animateScroll as scroll } from "react-scroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

class MMdE extends Component {
    state = {
        content: null,
    }

    componentDidMount() {
        let url = 'http://chatbotest.xyz:1337/Mmdes';
        fetch(url).then(response => response.json()).then((repos) => {


            this.setState({
                content: repos
            });

        }).catch(error => console.error('Error:', error));


    }
    render() {

        if (this.state.content == null) {
            return null;
        } else {
            const { content } = this.state;
            const arr = content.map(i => i.title);
            return (
                <section className="contShadow">
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12'>
                                <section className='MMdE'>

                                    <div className='row'>
                                        <div className='col-12'>
                                            <div className='MMdE__description'>
                                                <h1 className='MMdE__title' data-aos="fade-right">{arr[0]}</h1>
                                                <h2 className='MMdE__subtitle' data-aos="fade-left">{arr[1]}</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='MMdE__scheme'>
                                        <div className='row'>
                                            <div className='col-12'>
                                                <div className='Scheme-first'>
                                                    <CircleTextUp description="zwiększenie sprzedaży/ konwersji sklepu" src="images/MM_ikona-1.png" />
                                                    <div className='Scheme-first__arrows'>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-6'>
                                                <div className='Scheme-second'>
                                                    <CircleTextDown description="pozyskiwanie subskrybentów" src="images/MM_ikona-2.png" />
                                                    <div className='Scheme-first__arrows' data-aos="zoom-in" id="anchoringXXX">
                                                        <FontAwesomeIcon icon={faChevronRight} /><FontAwesomeIcon icon={faChevronRight} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-6'>
                                                <div className='Scheme-third'>
                                                    <CircleTextDown description="wysyłanie wiadomości do subskrybentów" src="images/MM_ikona-3.png" />
                                                    <div className='Scheme-first__arrows' data-aos="zoom-in" id="anchoringXXX">
                                                        <FontAwesomeIcon icon={faChevronRight} /><FontAwesomeIcon icon={faChevronRight} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col-12'>
                                            <div className='MMdE__text'>
                                                <span data-aos="fade-right"><strong>{arr[2]}</strong> {arr[3]}</span>
                                                <span data-aos="fade-left">{arr[4]} <strong> {arr[5]} </strong> </span>
                                                <span data-aos="fade-right"><strong>{arr[6]}</strong> {arr[7]}</span>

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
}

class CircleTextUp extends Component {
    render() {

        return (
            <>
                <div className='row'>
                    <div className='col-12'>
                        <div className='Scheme' data-aos="zoom-in">
                            <span className='Scheme__description' >{this.props.description}</span>
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
                        <div className='Scheme' data-aos="zoom-in">
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