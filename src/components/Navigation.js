import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import logoIkonka from '../assets/images/logo-ikonka.png'

class Navigation extends Component {
    state = {
        content: null,
    }
    componentDidMount() {
        let url = 'http://chatbotest.xyz:1337/Navigations';
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
                                                <span className="logo__text">Chatbot Universe</span></Link>


                                        </div>
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
                                            >{arr[0]}</Link>
                                        </li>
                                        <li className='nav__item'>
                                            <Link
                                                activeClass="active"
                                                to="Chatbot"
                                                spy={true}
                                                smooth={true}
                                                offset={-125}
                                                duration={500}
                                            >{arr[1]}</Link>
                                        </li>
                                        <li className='nav__item'>
                                            <Link
                                                activeClass="active"
                                                to="Contact"
                                                spy={true}
                                                smooth={true}
                                                offset={-125}
                                                duration={500}
                                            >{arr[2]}</Link>
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
}

export default Navigation;  