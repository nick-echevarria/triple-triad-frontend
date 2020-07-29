import React from 'react';
import { PositionContainer as Position } from '../containers/PositionContainer'
import '../css/Board.css';

const Board = props => {
    console.log(props)
    return (
        <div className="board-container">
            <div className="board-grid">
                {props.board.map(boardObject => <Position key={boardObject["position"]} {...boardObject} selectPosition={props.selectPosition}/>)}
            </div>
        </div>
    );
}

export default Board;


