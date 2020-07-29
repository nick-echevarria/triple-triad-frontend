import React from 'react';
import { CardContainer as Card } from './CardContainer'

export const OpponentHandContainer = (props) => {
    return (
        <div className="opponent-hand-container">
            <div className="opponent-hand">
                {props.opponentHand.map(card => <Card key={card.id} selectCard={props.selectCard} {...card}/>)}
            </div>
            <img className="opponent-score" src={`images/score-${props.opponentScore}.png`} alt="player-score"/>
        </div>        
    );
}

export default OpponentHandContainer;

