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
                                            <div className='text__arrows'
                                                id="anchoring2" data-aos-anchor="#showButtonLessM" data-aos="fade-up" data-aos-delay="3000" data-aos-offset="300">
                                                <FontAwesomeIcon icon={faChevronUp} />
                                                <FontAwesomeIcon icon={faChevronUp} />
                                            </div>
                                            <button className='text__button'
                                                id="anchoring2" data-aos-anchor="#showButtonLessM" data-aos="fade-up" data-aos-delay="3000" data-aos-offset="300" onClick={this.props.clickSelectedMMdE.bind(null, false)}>Zobacz mniej</button>

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