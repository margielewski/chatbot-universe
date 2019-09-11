import React, { Component } from "react";

// import { Link, } from 'react-router-dom';
// import { Link, animateScroll as scroll } from "react-scroll";

class Navigation extends Component {
    render() {

        return (
            <>
                <section className='navigation'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-5'>
                                <div className='navigation__logo'>
                                    <div className='logo__image'>
                                        <img className='foto-size' src="../../../images/logo-ikonka.png" />
                                    </div>
                                    <span className='logo__text'>Chatbot Universe</span>
                                </div>
                            </div>
                            <div className='col-7 navigation__nav'>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Navigation;  