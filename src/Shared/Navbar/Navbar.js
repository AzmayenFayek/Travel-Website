import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hook/useFirebase';
import './Navbar.css'

const Navbar = () => {

    const { handleLogout, user } = useFirebase();


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [show, setShow] = useState(false);

    return (
        <div>
            <section className="navbar-class">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <Link to="/home" className="navbar-brand"> Tripo.</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                            onClick={() => setShow(!show)}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`collapse navbar-collapse ${show ? "show" : "!show"}`} >
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="/home" className="nav-link active" aria-current="page">Home</Link>                               </li>
                                <li className="nav-item">
                                    <Link to="/events" className="nav-link">Events</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about" className="nav-link" >About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact" className="nav-link">Contact</Link>
                                </li>

                            </ul>
                            <form className="d-flex">
                                <Link to="/login">
                                    <button className="btn btn-outline-none" id="btn-signUp" type="submit">Sign Up</button>
                                </Link>
                                {user.email ? (
                                    <button onClick={handleLogout} className="btn btn-danger" id="btn-signIn">
                                        Sign Out
                                    </button>
                                ) : (
                                    <Link to="/login">
                                        <button className="btn btn-outline-none" id="btn-signIn" type="submit">Sign In</button>
                                    </Link>
                                )}
                            </form>
                            <p className="ps-2 margin-user ">{user.email}</p>
                        </div>
                    </div>
                </nav>
            </section>
        </div>
    );
};

export default Navbar;