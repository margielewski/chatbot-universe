import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
class ButtonShowLessC extends Component {

    render() {
        // console.log(this.props.display)
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <section className='ButtonShowLess'>
                            <div className='row'>
                                <div className='col-12'>
                                    <div className='ButtonShowLessC__text'>
                                        <div className='text__arrows' data-aos="fade-up">
                                            <FontAwesomeIcon icon={faChevronUp} />
                                            <FontAwesomeIcon icon={faChevronUp} />
                                        </div>
                                        <button className='text__button' data-aos="fade-up" onClick={this.props.clickSelectedChatbot.bind(null, false)}>Zobacz mniej</button>

                                    </div>

                                </div>
                            </div>

                        </section>
                    </div>
                </div>
            </div>
        )
    }
}

export default ButtonShowLessC;  