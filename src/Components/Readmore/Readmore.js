import React from 'react';
import { useEffect, useState } from 'react';
import "./readmore.css"
import { Link, useParams } from 'react-router-dom';
import Footer from './../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';

const Readmore = () => {

    const handleBuynow = (id) => {
        console.log(id);
    };

    const { id } = useParams();
    const [details, setDetails] = useState({})
    useEffect(() => {

        fetch(`https://fierce-garden-42274.herokuapp.com/allEvents`)
            .then(res => res.json())
            .then(data => {

                const p = data.find(p => p._id === id)
                console.log('this is details', p)
                setDetails(p)
            })
    }, [id])




    console.log(details)

    return (
        <>
            <Navbar></Navbar>
            <section className="events-section">
                <div className="container w-50">

                    <div className="single-cat mb-30 ">
                        <div className="cat-img">
                            <img src={details.image} alt="" />
                        </div>
                        <div className="cat-cap">
                            <div className="pricing d-flex justify-content-between">
                                <h3> {details.title}</h3>
                                <span className="price">${details.price}</span>
                            </div>
                            <div className="d-flex justify-content-between">

                                <p>{details.date}</p>
                                <p>{details.time}</p>
                            </div>



                            <div className="d-flex justify-center">
                                <Link to={`/events/${details._id}`}>
                                    <span className="fas fa-arrow-right"></span>
                                </Link>
                                {/* <Link to={`/events/${details._id}`}>
                        <button onClick={() => handleReadmore(details._id)} className="fas fa-arrow-right"></button>
                      </Link> */}

                                {/* <form onSubmit={handleReadmore(onSubmit)}> */}
                                {/* <span class="fas fa-arrow-right"></span> */}

                                {/* </form> */}
                                <Link to="/buynow">
                                    <button onClick={() => handleBuynow(details._id)} className="fas fa-shopping-cart"></button>
                                </Link>
                            </div>
                        </div>
                        <div><p>{details.description}</p></div>

                    </div>
                </div>

            </section>
            <Footer></Footer>
        </>

    );
};
export default Readmore;