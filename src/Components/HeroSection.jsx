import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
    return(
        <div className="hero">
            <div className="hero-content">
                <h1>Journey to Explore World</h1>
                <p>
                Ac mi duis mollis. Sapiente? Scelerisque quae, penatibus? Suscipit class
                corporis nostra rem quos voluptatibus habitant? Fames, vivamus minim
                nemo enim, gravida lobortis quasi, eum.
                </p>
                <div className="buttons">
                    <button className="learn-more">Learn More</button>
                    <button className="book-now">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;