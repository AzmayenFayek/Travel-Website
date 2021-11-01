import React from 'react';
import Navbar from './../../Shared/Navbar/Navbar';
import Footer from './../../Shared/Footer/Footer';
// import HomePageServices from '../HomePageServices/HomePageServices';
import Header from '../Header/Header';
import Events from '../AllEvents/Events';
// import HowWeWork from '../HowWeWork/HowWeWork';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Events></Events>
            {/* <HowWeWork></HowWeWork>
            <HomePageServices></HomePageServices> */}
            <Footer></Footer>
        </div>
    );
};

export default Home;