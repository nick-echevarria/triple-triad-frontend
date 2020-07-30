import React from 'react';
import { PositionContainer as Position } from '../containers/PositionContainer'
import '../css/Board.css';
import '../css/PositionContainer.css'

const Board = props => {
    return (
        <div className="board-container">            
                {props.board.map(boardObject => <Position key={boardObject["position"]} {...boardObject} selectPosition={props.selectPosition}/>)}
        </div>
    );
}

export default Board;


