import React, { useState } from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../Hook/useFirebase";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import './Login.css';


const Login = () => {
    const {
        handleGoogleLogin,
        handleUserRegister,
        handleUserLogin,
    } = useFirebase();

    // const [records, setRecords] = useState([]);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const hanldeEmail = (e) => {
        setEmail(e.target.value);
    };
    const hanldePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleRegister = (e) => {
        e.preventDefault();

        // const newRecord = { email, password }
        // setRecords([...records, newRecord]);
        // console.log(records);
        handleUserRegister(email, password);
        console.log(handleUserRegister)
    };


    const handleLogin = () => {
        handleUserLogin(email, password);
    };

    return (
        <>
            <Navbar></Navbar>
            <div className=" justify-content-center ">
                <div className="container-fluid ">
                    <div className="col-md-12 mt-5 mb-5 form-control container-box">
                        <form onSubmit={handleRegister}>
                            <div className="form-input mt-5">
                                <input autoComplete="off"
                                    onChange={hanldeEmail}
                                    className="mt-2 p-2 emailField"
                                    type="email"
                                    placeholder="Email"
                                />
                                <br />
                                <input autoComplete="off"
                                    onChange={hanldePassword}
                                    className="mt-2 p-2 passwordField"
                                    type="password"
                                    placeholder="Password"
                                />
                                <br />
                                <div className="login-regiater-btn mt-4">
                                    <button
                                        onClick={handleRegister}
                                        className="btn btn-primary me-1 btn-reg"
                                    >
                                        Sign Up
                                    </button>
                                    {<Link to="/home" onClick={handleLogin} className="btn btn-success ms-1 btn-login">
                                        Sign In
                                    </Link>}
                                </div>
                            </div>
                            <div className="login-btn mt-3">
                                {<Link to="/home"
                                    onClick={handleGoogleLogin}
                                    className="btn btn-warning m-2 mb-5"
                                >
                                    google sign in
                                </Link>}
                            </div>
                        </form>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Login;