import React, { Component } from 'react'

// const tmp = window.innerWidth <= 600;

export default class VideoComponent extends Component {
    render() {
        return (
            <video media="only screen and (max-device-width: 480px)" src="/vids/Space-5200.mp4" autoPlay loop/>
        )
    }
}
