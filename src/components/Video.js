import React, { Component } from "react";


class Video extends Component {
    render() {
        return (
            <>
                <div className='container videoContainer'>
                    <h2>Filmik _demonstracyjny</h2>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/qLRlVhb0Jyo" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </>
        )
    }
}

export default Video;  