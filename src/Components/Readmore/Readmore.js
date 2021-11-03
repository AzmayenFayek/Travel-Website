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
            <section className="events-section">
                <div className="container">

                    <div className="single-cat mb-30 ">
                        <div className="cat-img">
                            <img src={event.image} alt="" />
                        </div>
                        <div className="cat-cap">
                            <div className="pricing d-flex justify-content-between">
                                <h3> {event.title}</h3>
                                <span className="price">${event.price}</span>
                            </div>
                            <div className="d-flex justify-content-between">

                                <p>{event.date}</p>
                                <p>{event.time}</p>
                            </div>



                            <div className="d-flex justify-center">
                                <Link to={`/events/${event._id}`}>
                                    <span className="fas fa-arrow-right"></span>
                                </Link>
                                {/* <Link to={`/events/${event._id}`}>
                        <button onClick={() => handleReadmore(event._id)} className="fas fa-arrow-right"></button>
                      </Link> */}

                                {/* <form onSubmit={handleReadmore(onSubmit)}> */}
                                {/* <span class="fas fa-arrow-right"></span> */}

                                {/* </form> */}
                                <Link to="/buynow">
                                    <button onClick={() => handleBuynow(event._id)} className="fas fa-shopping-cart"></button>
                                </Link>
                            </div>
                        </div>
                        <div><p>{event.description}</p></div>
                        <div><p>{id}</p></div>


                    </div>
                </div>

            </section>
            <Footer></Footer>
        </>

    );
};
export default Readmore;