import React from "react";
import aboutimage from "../images/about.png";
function About() {
    return (
        <div id="about">
            <div className="about-image">
                <img src={aboutimage} />
            </div>
            <div className="about-text">
                <h1>LEARN MORE ABOUT US</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit adipisci id illum dolorem nisi autem, quod illo minima magnam error, molestiae cupiditate, vel nostrum incidunt.</p>
                <button>READ MORE</button>
            </div>
        </div>
    )
}
export default About;