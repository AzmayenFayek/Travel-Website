import React from 'react';
import { useEffect, useState } from 'react';
import "./readmore.css"
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import Footer from './../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';

const Readmore = () => {

    const handleBuynow = (id) => {
        console.log(id);
    };

    const { id } = useParams();
    const [event, setEvent] = useState({})
    useEffect(() => {

        fetch(`https://fierce-garden-42274.herokuapp.com/allEvents/${id}`)
            .then(res => res.json())
            .then(data => setEvent(data))
    }, [])


    return (
        <>
            <Navbar></Navbar>
            <div className="support-company-area bottom-padding">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-xl-6 col-lg-6 col-md-10">
                            <div className="support-location-img">
                                <img src={event.image} alt=' ' />
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 col-md-10">
                            <div className="right-caption">

                                <div className="section-tittle">
                                    <h2>Details About {event.title} Tour</h2>
                                </div>
                                <div className="support-caption">
                                    <p className="mb-50">{event.description}</p>



                                    <div className="pricing d-flex justify-content-between">
                                        <p className="date" >{event.date}</p>
                                        <p className="date">{event.time}</p>
                                    </div>
                                    <div className="d-flex justify-content-between" ><span className="price">${event.price}</span>
                                        <Link to="/buynow">
                                            <button onClick={() => handleBuynow(event._id)} className="fas fa-shopping-cart"></button>
                                        </Link></div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>









            <Footer></Footer>
        </>

    );
};
export default Readmore;