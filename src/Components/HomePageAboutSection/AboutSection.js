import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
    return (
        <div className="support-company-area bottom-padding">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-xl-6 col-lg-6 col-md-10">
                        <div className="support-location-img">
                            <img src="https://www.seekpng.com/png/detail/1010-10101177_tour-travel-png-vectors-tours-and-travels-png.png" alt=' ' />
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6 col-md-10">
                        <div className="right-caption">

                            <div className="section-tittle">
                                <span>About Us</span>
                                <h2>Get ready for real time adventure</h2>
                            </div>
                            <div className="support-caption">
                                <p className="mb-50">Let’s start your journey with us, your dream will come true.</p>
                                <p className="mb-50">We have trained travelers guide</p>
                                <p className="mb-50">Have a nice journey</p>

                                <a href="about.html" className="btn about-btn">Book Your Destination</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;