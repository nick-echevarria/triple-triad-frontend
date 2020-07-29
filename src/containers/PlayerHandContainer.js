import React from 'react';
import { CardContainer as Card } from './CardContainer'

const PlayerHandContainer = (props) => {
    return (
        <div className="player-hand-container">
            <div className="player-hand">
                {props.playerHand.map(card => <Card key={card.id} selectCard={props.selectCard} {...card} />)}
            </div>
                <img className="player-score" src={`images/score-${props.playerScore}.png`} alt="player-score"/>
        </div>                
            
    );
}

export default PlayerHandContainer;
