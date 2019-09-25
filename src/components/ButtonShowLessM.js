import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
class ButtonShowLessM extends Component {

    render() {
        // console.log(this.props.display)
        return (
            <>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <section className='ButtonShowLess'>
                                <div className='row'>
                                    <div className='col-12'>
                                        <div className='ButtonShowLessM__text'>
                                            <div className='text__arrows'>
                                                <FontAwesomeIcon icon={faChevronUp} />
                                                <FontAwesomeIcon icon={faChevronUp} />
                                            </div>
                                            <button className='text__button' onClick={this.props.clickSelectedMMdE.bind(null, false)}>Zobacz mniej</button>

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

export default ButtonShowLessM;  