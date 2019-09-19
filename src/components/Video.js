import React, { Component } from "react";


class Video extends Component {
    render() {
        return (
            <>
                <div className='container videoContainer'>
                    <h2>Filmik _demonstracyjny</h2>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/qLRlVhb0Jyo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </>
        )
    }
}

export default Video;  