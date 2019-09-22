import React, { Component } from "react";


class Content extends Component {

    render() {
        console.log(this.props.display)
        return (
            <>
                <div style={{ display: this.props.display }}>
                    <p>W przelit sit amet...” po</p>

                </div>
            </>
        )
    }
}

export default Content;  