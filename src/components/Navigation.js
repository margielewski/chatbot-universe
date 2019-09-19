import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import logoIkonka from '../assets/images/logo-ikonka.png'

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = { content: [] };
    }

    render() {

        return (
            <>
                <section className='navigation'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-5'>
                                <div className='navigation__logo'>
                                    <div className='logo__image'>
                                        <Link
                                            activeClass="active"
                                            to="Choice"
                                            spy={true}
                                            smooth={true}
                                            offset={-125}
                                            duration={500}
                                        >
                                            <img className='image-size' alt="Logo" src={logoIkonka}>
                                            </img>
                                        </Link>
                                    </div>
                                    <span className='logo__text'></span>
                                </div>
                            </div>
                            <div className='col-7 navigation__nav'>
                                <ul className='nav-list'>
                                    <li className='nav__item'>
                                        <Link
                                            activeClass="active"
                                            to="MMdE"
                                            spy={true}
                                            smooth={true}
                                            offset={-125}
                                            duration={500}
                                        >Messenger Marketing</Link>
                                    </li>
                                    <li className='nav__item'>
                                        <Link
                                            activeClass="active"
                                            to="Chatbot"
                                            spy={true}
                                            smooth={true}
                                            offset={-125}
                                            duration={500}
                                        >Chatbot</Link>
                                    </li>
                                    <li className='nav__item'>
                                        <Link
                                            activeClass="active"
                                            to="Contact"
                                            spy={true}
                                            smooth={true}
                                            offset={-125}
                                            duration={500}
                                        >Kontakt</Link>
                                    </li>
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