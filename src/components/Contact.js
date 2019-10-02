import React, { Component } from "react";
// import { Link, } from 'react-router-dom';
// import { Link, animateScroll as scroll } from "react-scroll";

class Contact extends Component {
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
            return (
                <section>
                    <div className='Contact__bgc-resizer'>
                        <div className='Contact__bgc'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-12'>
                                        <section className='Contact'>
                                            <div className='row'>
                                                <div className='col-6'>
                                                    <div className='Contact__admin_details'>
                                                        <span className='admin_details__phone'>+48 666 108 701</span>
                                                        <span className='admin_details__mail'>contact@chatbot-universe.com</span>
                                                    </div>

                                                </div>
                                                <div className='col-6'>
                                                    <div className='Contact__user_info'>
                                                        <h1 className='user_info__text1'>Masz pytania?</h1>
                                                        <span className='user_info__text2'>Zostaw nam wiadomość:</span>
                                                        <input name="userMessage" className='user_info__message' type="text" placeholder="*Twoja wiadomość" />
                                                        <button className='user_info__button'>Wyślij</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            )
        }
    }
}

export default Contact;  