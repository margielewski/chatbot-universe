import React, { Component } from "react";
import logoIkonka from '../assets/images/logo-ikonka.png'

class Navigation extends Component {
    state = {
        content: null,
    }
    componentDidMount() {
        let url = 'http://chatbotest.xyz:1337/Navigations';
        fetch(url).
            then(response => response.json()).then((repos) => {

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
                                            <img className='image-size' alt="Logo" src={logoIkonka} />
                                        </div>
                                        <span className='logo__text'></span>
                                    </div>
                                </div>
                                <div className='col-7 navigation__nav'>
                                    <ul className='nav-list'>





                                        <li className='nav__item'>{arr[0]}</li>
                                        <li className='nav__item'>{arr[1]}</li>
                                        <li className='nav__item'>{arr[2]}</li>
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