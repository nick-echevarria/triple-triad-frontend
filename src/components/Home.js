import React from 'react';
// import Link from 'react-router'
import '../css/Home.css'

const Home = () => {

    function goToCollection() { 
        // props.history.pushState(null, 'collection');
    }

    function logOut() { 
        // props.history.pushState(null, 'collection');
    }

    return (
        <div className="home-container">
            <div className="home-1">
                <div className="home-header-1"></div>      
                <div className="home-header-2"/>                           
                <div className="home-header-3"></div>
            </div>
            <div className="home-2">
                <div className="home-body-1"/>
                <div className="home-body-2"/>
                <div className="home-body-3"/>
            </div>
            <div className="home-3">
                <div className="home-footer-1"/>      
                <div className="home-footer-2"/>   
                <div className="home-footer-3">
                    <div><button type="button" className="collection-button" onClick={goToCollection()}>Your Collection</button></div>
                    <div><button type="button" className="log-out-button" onClick={logOut()}>Log Out</button></div>
                </div>    
            </div>
        </div>
    );
}

export default Home;
