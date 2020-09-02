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
                <div className="header" />
                <div className="card-list"/>
                <div classname="card-view" />
                <div className="footer" />
            </div>
        )
    };
}

export default Collection;

