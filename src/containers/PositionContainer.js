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