import React from 'react';
import "./Contact.css"
import Footer from './../../Shared/Footer/Footer';
import Navbar from './../../Shared/Navbar/Navbar';

const Contact = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="contactText">
                Contact Us
            </h1>

            <div className="container mb-5">
                Dental Care was started in the year 1995 as a small private dental clinic in Binghamton, NY, USA. Looking for affordable dental care?


                <br />
                <br />
                To take a trivial example,
                which of us ever undertakes laborious physical exercise,
                except to obtain.
                <br />
                <br />
                <p>please contact us at whenever you want<a href="google.com"> info@medicare.com.</a></p>

            </div>
            <Footer className="mt-5"></Footer>
        </div >
    );
};


export default Contact;
