import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import "./About.css";

const About = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="extra-margin-bottom " >
                <div className="container">
                    <h1 className="aboutUsText">About Us</h1>
                    <div className="quote-section">
                        <div className="quote-container">

                            <p className="title-name quote-item" fontWeight="400">
                                To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain.
                            </p>
                        </div>

                        <div className="quote-container">
                            <p className="title-name quote-item" fontWeight="400">
                                To provide outstanding dental care with a commitment of honesty, integrity & quality.
                            </p>
                        </div>
                        <div className="quote-container">
                            <p className="title-name quote-item" fontWeight="400">
                                Your teeth play an important part in your daily life. It not only helps you to chew and eat your food, but frames your face.
                            </p>



                        </div>
                    </div>

                </div>
            </div>
            <Footer></Footer>

            <div >
            </div>

        </div>
    );
};

export default About;