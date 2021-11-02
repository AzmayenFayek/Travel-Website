import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Events.css";

const Events = () => {





  const handleBuynow = (id) => {
    console.log(id);
  };



  const [event, setEvent] = useState([]);

  useEffect(() => {
    fetch(`https://fierce-garden-42274.herokuapp.com/allEvents`)
      .then((res) => res.json())
      .then((data) => setEvent(data));
  }, []);

  console.log(event);
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
                      <Link to={`/events/${pd._id}`}>
                        <span className="fas fa-arrow-right"></span>
                      </Link>
                      {/* <Link to={`/events/${pd._id}`}>
                        <button onClick={() => handleReadmore(pd._id)} className="fas fa-arrow-right"></button>
                      </Link> */}

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