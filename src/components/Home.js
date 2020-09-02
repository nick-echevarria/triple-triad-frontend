import React from 'react';
import Link from 'react-router'

const Home = (props) => {

    function goToCollection() { 
        props.history.pushState(null, 'login');
    }

    return (
        <div className="home-container">
            <div className="home-1">
                <div className="header-1"></div>      
                <div className="header-2"/>                           
                <div className="header-3"></div>
            </div>
            <div className="home-2">
                <div className="body-1"/>
                <div className="body-2"/>
                <div className="body-3"/>
            </div>
            <div className="home-3">
                <div className="footer-1"/>      
                <div className="footer-2"/>   
                <div className="footer-3">
                    <button type="button" className="Collection" onClick={goToCollection()}>Your Collection</button>
                </div>    
            </div>
        </div>
    );
}

export default Home;
