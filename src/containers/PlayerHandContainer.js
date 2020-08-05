import React from 'react';
import { CardContainer as Card } from './CardContainer'
import '../css/PlayerHandContainer.css'


export const PlayerHandContainer = (props) => {
    return (
        <div className="player-hand-container">
            {props.playerHand.map(card => <Card key={card.id} selectCard={props.selectCard} selectedCard={props.selectedCard} {...card} />)}
            <div className="player-score-container">
                <img className="player-score" src={require(`../images/score-${props.playerScore}.png`)} alt="player-score"/>
            </div>   
        </div>       
    );
}

export default PlayerHandContainer;
