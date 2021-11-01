import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';

const Readmore = () => {
    const { id } = useParams();



    useEffect(() => {

        fetch(`http://localhost:5000/event/${id}`)
            .then(res => res.json())
            .then(data => console.log(data));
    }, []);



    return (
        <div className="content-event">
            {id.map((pd, index) => (
                <div className="single-cat mb-30 " key={id}>
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
                        <p>{pd.description}</p>


                        {/* <form onSubmit={handleReadmore(onSubmit)}> */}
                        {/* <span class="fas fa-arrow-right"></span> */}

                        {/* </form> */}
                        {/* <Link to="/buynow">
                    <button onClick={() => handleBuynow(id)} className="fas fa-shopping-cart"></button>
                </Link> */}
                    </div>
                </div>
            ))}
        </div>
    );
};
export default Readmore;