import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
// import { Link, } from 'react-router-dom';
// import { Link, animateScroll as scroll } from "react-scroll";

class Chatbot extends Component {
    state = {
        content: null,
    }
    componentDidMount() {
        let url = 'http://chatbotest.xyz:1337/Chatbots';
        fetch(url).then(response => response.json()).then((repos) => {
            this.setState({
                content: repos
            });

        });

    }
    render() {
        if (this.state.content == null) {
            return null;
        } else {
            const { content } = this.state;
            const arr = content.map(i => i.title);
            console.log(arr);

            return (
                <>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12'>
                                <section className='Chatbot' id='Chatbot'>
                                    <div className='row'>
                                        <div className='col-12'>
                                            <div className='Chatbot__description'>
                                                <h1 className='Chatbot__title'>Chatbot</h1>
                                                <h2 className='Chatbot__subtitle'>Wirtualny asystent dla twojej firmy</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='Chatbot__scheme'>

                                        <div className='row'>
                                            <div className='col-6'>
                                                <div className='Scheme-second'>
                                                    <CircleTextDown description="automatyzacja procesów" src="images/boty_ikona-2.png" />
                                                </div>
                                            </div>
                                            <div className='col-6'>
                                                <div className='Scheme-third'>
                                                    <CircleTextDown description="uatrakcyjnienie marki" src="images/boty_ikona-1.png" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col-12'>
                                            <div className='Chatbot__text'>
                                                <span>{arr[2]}<strong> 24/7</strong></span>
                                                <span>{arr[3]} <strong> {arr[4]} </strong> {arr[5]} </span>
                                                <span><strong>{arr[6]}</strong> {arr[7]}</span>
                                                <div className='text__arrows'>
                                                    <FontAwesomeIcon icon={faChevronDown} />
                                                    <FontAwesomeIcon icon={faChevronDown} />
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
                                <img className='foto__obramowanie' alt='MM_ikona' src="images/boty_obramowanie.png" />
                            </div>
                            <span className='Scheme__description'>{this.props.description}</span>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Chatbot;  