import React from 'react';
import '../styles/Videobackground.css';  // Make sure your CSS is linked

export default function VideoBackground() {
    return (
        <div className="video-container">
            <video autoPlay loop muted className="background-video">
                <source src="../assets/2935032-uhd_3840_2160_30fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="content-overlay">
                <h1 className="overlay-text">Weather App</h1>
            </div>
        </div>
    );
}
