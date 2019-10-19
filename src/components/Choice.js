import React, { Component } from "react";

class Choice extends Component {
    state = {
        content: null,
    }
    componentDidMount() {
        let url = 'http://chatbotest.xyz:1337/Choices';
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
                  
                    <div className='Choice__bgc'>

                        <div className='container'>
                            <div className='row'>
                                <div className='col-12'>
                                    <section className='Choice'>
                                        <div className='Mobile' data-aos="fade-up">
                                            <div className='Mobile__chat'>
                                                <img className='chat__custom-chat' alt='ikonka mess' src="images/custom-chat.png"
                                                    data-aos="zoom-in" data-aos-delay="2000" />
                                                <img className='chat__logo' alt='ikonka logo' src="images/cbot1.svg" />

                                                <span className='chat__q1'>{arr[0]}
                                                    <img className='a1__rocket' alt='ikonka rakieta niebieska' src="images/rakieta_niebieska.png" />
                                                </span>
                                                <span className='chat__a1'>{arr[1]}
                                                    <img className='a1__rocket' alt='ikonka rakieta niebieska' src="images/rakieta_niebieska.png" />
                                                </span>
                                                <span className='chat__q2'>{arr[2]}
                                                    <img className='a1__rocket' alt='ikonka rakieta niebieska' src="images/rakieta_fiolet.png" />
                                                </span>
                                                <span className='chat__a2'>{arr[3]}
                                                    <img className='a1__rocket' alt='ikonka rakieta niebieska' src="images/rakieta_fiolet.png" />
                                                </span>
                                            </div>
                                            <div></div>
                                        </div>
                                    </section>

                                </div>
                            </div>
                        </div>
                    </div>

                   
                </section>

            )
        }
    }
}

export default Choice;

