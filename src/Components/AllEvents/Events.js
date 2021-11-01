import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Events.css";
import Navbar from './../../Shared/Navbar/Navbar';
import Footer from "../../Shared/Footer/Footer";
import { useForm } from "react-hook-form";

const Events = () => {


  const handleReadmore = (id) => {

    fetch(`http://localhost:5000/events/${id}`)
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

  const handleBuynow = (id) => {
    console.log(id);
  };



  const [event, setEvent] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/allEvents`)
      .then((res) => res.json())
      .then((data) => setEvent(data));
  }, []);

  return (
    <>

      <section className="events-section">

        <div className="container">
          <div className="container heading-title mb-45">
            <span >Check our best promotional tour</span>
            <h2 className="heading">Upcoming Events </h2>
          </div>
          <div className="content-event">
            {event?.map((pd, index) => (

              <div className="single-event" key={pd.id}>
                <div className="single-cat mb-30 ">
                  <div className="cat-img">
                    <img src={pd.image} alt="" />
                  </div>
                  <div className="cat-cap">
                    <div className="pricing d-flex justify-content-between">
                      <h3> {pd.title}</h3>
                      <span className="price">${pd.price}</span>
                    </div>
                    <div className="d-flex justify-content-between">

                      <p>{pd.date}</p>
                      <p>{pd.time}</p>
                    </div>
                    <div className="d-flex justify-center">

                      <button onClick={() => handleReadmore(pd._id)} className="fas fa-arrow-right"></button>


                      {/* <form onSubmit={handleReadmore(onSubmit)}> */}
                      {/* <span class="fas fa-arrow-right"></span> */}

                      {/* </form> */}
                      <Link to="/buynow">
                        <button onClick={() => handleBuynow(pd._id)} className="fas fa-shopping-cart"></button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>



            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;