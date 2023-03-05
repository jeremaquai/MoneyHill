import React from "react";
import './HomePage.css';

export default function HomePage() {
    return (
        <div className="HomePage" >
            <div className="videoWrapper">
                <iframe width='100%' mozallowfullscreen webkitAllowFullScreen allowFullScreen title="Video from Money Hill Country Club" src="https://player.vimeo.com/video/392529736?h=d3e6579903&muted=1&autoplay=1&loop=1&transparent=0&background=1&app_id=122963"   ></iframe>           
            </div>
        </div>
    );
}