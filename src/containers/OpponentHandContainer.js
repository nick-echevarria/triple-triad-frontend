import React from 'react';
import { CardContainer as Card } from './CardContainer'
import '../css/OpponentHandContainer.css'

export const OpponentHandContainer = (props) => {
    //toggle cursor 
    //implementing a state hook w/ an array
    return (
        <div className="opponent-hand-container">
            {props.opponentHand.map(card => <Card key={card.id} selectCard={props.selectCard} selectedCard={props.selectedCard} {...card} />)}
            <div className="opponent-score-container">
                <img className="opponent-score" src={require(`../images/score-${props.opponentScore}.png`)} alt="opponent-score"/>    
            </div> 
        </div>        
    );
}

export default OpponentHandContainer;
