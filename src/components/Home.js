import React from 'react';
// import Link from 'react-router'
import '../css/Home.css'
import 'react-bulma-components/dist/react-bulma-components.min.css';

const Home = () => {

    // function goToCollection() { 
    //     // props.history.pushState(null, 'collection');
    // }

    // function logOut() { 
    //     // props.history.pushState(null, 'collection');
    // }

    return (
        <div className="home-container">
            <div className="home-1">
                <div className="home-header-1"></div>      
                <div className="home-header-2"/>                           
                <div className="home-header-3"></div>
            </div>
            <div className="home-2">
                <div className="home-body-1"/>
                <div className="home-body-2">
                    <button class="button quick-play-button is-primary is-medium">Play</button>
                    <br></br>
                    <button class="button collection-button is-warning is-medium">My Collection</button>
                    <br></br>
                    <button class="button log-out-button is-danger is-medium">Log Out</button>                    
                </div>    
                <div className="home-body-3"/>
            </div>
            <div className="home-3">
                <div className="home-footer-1"/>      
                <div className="home-footer-2"/>   
                <div className="home-footer-3"/>  
            </div>
        </div>
    );
}

export default Home;
