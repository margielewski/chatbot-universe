import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";
class ButtonShowMoreC extends Component {

    render() {
        // console.log(this.props.display)
        return (
            <>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <section className='ButtonShowMore'>
                                <div className='row'>
                                    <div className='col-12'>
                                        <div className='ButtonShowMoreC__text'>
                                            <div className='text__arrows'>
                                                <FontAwesomeIcon icon={faChevronDown} />
                                                <FontAwesomeIcon icon={faChevronDown} />
                                            </div>
                                            <button className='text__button' onClick={this.props.clickSelectedChatbot.bind(null, true)}>Zobacz więcej</button>

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

export default ButtonShowMoreC;  