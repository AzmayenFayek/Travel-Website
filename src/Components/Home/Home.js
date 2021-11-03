import React from 'react';
import Navbar from './../../Shared/Navbar/Navbar';
import Footer from './../../Shared/Footer/Footer';
// import HomePageServices from '../HomePageServices/HomePageServices';
import Header from '../Header/Header';
import Events from '../AllEvents/Events';
import AboutSection from '../HomePageAboutSection/AboutSection';
// import HowWeWork from '../HowWeWork/HowWeWork';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Events></Events>
            {/* <HowWeWork></HowWeWork>
            <HomePageServices></HomePageServices> */}
            <AboutSection></AboutSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;