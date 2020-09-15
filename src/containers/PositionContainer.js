import React from 'react';
import CardContainer from './CardContainer'
import '../css/PositionContainer.css'

export const PositionContainer = (props) => {    
    return (
        <div className={`board-position position-${props.position}`} onClick={() => props.selectPosition(props.position)}>
            {props.card && <CardContainer key={props.position.key} {...props.position} {...props.card} played={true}/>}
        </div>
    );
}

// on first position click, cursor needs to appear
// on confirm position click, cursor needs to disappear 
// {/* <img className="position-cursor" alt="position-cursor" src={require(`../images/cursor.png`)} /> */}