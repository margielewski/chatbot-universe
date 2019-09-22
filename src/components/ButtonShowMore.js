import React, { Component } from "react";

class ButtonShowMore extends Component {

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
                                        <div className='ButtonShowMore__text'>
                                            <button className='text__button' onClick={this.props.userSelected.bind(false, true)}>Zobacz więcej</button>

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

export default ButtonShowMore;  