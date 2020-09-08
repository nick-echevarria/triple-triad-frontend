import React, { Component } from 'react';
import '../css/Collection.css'

const allCards = "http://localhost:3000/cards"

class Collection extends Component {
    state = { 
        allCards: [],
        selectedHand: [] //pass this back up so that game can use it for the player's hand
    }

    componentDidMount() { 
        this.fetchAllCards();
    }

    fetchAllCards() { 
        fetch(allCards)
            .then(res => res.json())
            .then(allCards => this.setState({ allCards }))
    }

    render() {
        return (
            <div className="collection-container">
                <div className="collection-1">
                    <div className="collection-header-1"/>     
                    <div className="collection-header-2"/>                           
                    <div className="collection-header-3"/>
                </div>
                <div className="collection-2">
                    <div className="collection-body-1"/>
                    <div className="collection-body-2"/>
                </div>
                <div className="collection-3">
                    <div className="collection-footer-1"/>      
                </div>
        </div>
        )
    };
}

export default Collection;
