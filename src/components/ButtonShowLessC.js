import React, { Component } from "react";

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
                                    <div className='ButtonShowLess__text'>
                                        <button className='text__button' onClick={() => displayGreeting(a => {
                                            console.log(a)
                                            return false
                                        })}>Zobacz mniej</button>

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