import React, { Component } from "react";
import logoIkonka from '../assets/images/logo-ikonka.png'

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
                                        <img className='image-size' alt="Logo" src={logoIkonka} />
                                    </div>
                                    <span className='logo__text'>Chatbot Universe</span>
                                </div>
                            </div>
                            <div className='col-7 navigation__nav'>
                                <ul className='nav-list'>
                                    <li className='nav__item'>Messenger Marketing</li>
                                    <li className='nav__item'>Chatbot</li>
                                    <li className='nav__item'>Kontakt</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Navigation;  