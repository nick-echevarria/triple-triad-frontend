import React from 'react';
import '../css/Home.css'
import Box from "../public/images/info-box.png"

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-1">
                <div className="header-1"></div>
                <p className="title">Triple Triad</p>
                <img className="header-2" src={Box} />                
                <div className="header-3"></div>
            </div>
            <div className="home-2">
                <div className="menu-1"/>
                <img className="menu-2" src={Box}/>
                <div className="menu-3"/>
            </div>
            <div className="home-3"/>
            {/* <div className="home-4"/>
            <div className="home-5"/>
            <div className="home-6"/>
            <div className="home-7"/>
            <div className="home-8"/>
            <div className="home-9"/> */}
        </div>
    );
}

export default Home;


