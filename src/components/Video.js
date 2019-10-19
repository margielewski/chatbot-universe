import React, { Component } from "react";


class Video extends Component {
    render() {
        return (
            <><section>
                <div className='container videoContainer'>
                    <h2 data-aos="fade-right"> Filmik _demonstracyjny</h2>
                    <iframe data-aos="fade-up" width="560" height="315" src="https://www.youtube.com/embed/qLRlVhb0Jyo" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div></section>

            </>
        )
    }
}

export default Video;  