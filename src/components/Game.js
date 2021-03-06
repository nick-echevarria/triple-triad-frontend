import React, { Component } from 'react';
import PlayerHandContainer from '../containers/PlayerHandContainer';
import OpponentHandContainer from '../containers/OpponentHandContainer';
import Board from './Board'
import '../css/Game.css'
import '../containers/PlayerHandContainer.js'
import '../containers/OpponentHandContainer.js'
import cursorImg from '../images/cursor.png' 

const allCards = "http://localhost:3000/cards"
const PLAYER_ONE = "playerOne"
const PLAYER_TWO = "playerTwo"

const comparisonMap = {
    1: [
        {
            position: 2,
            playedCard_value: 'right_value',
            otherCard_value: 'left_value'
        },
        {
            position: 4,
            playedCard_value: 'bottom_value',
            otherCard_value: 'top_value'
        }
    ], 
    2: [
        {
            position: 1,
            playedCard_value: 'left_value',
            otherCard_value: 'right_value'
        },
        {
            position: 3,
            playedCard_value: 'right_value',
            otherCard_value: 'left_value'
        }, 
        {
            position: 5,
            playedCard_value: 'bottom_value',
            otherCard_value: 'top_value'
        }
    ], 
    3: [
        {
            position: 2,
            playedCard_value: 'left_value',
            otherCard_value: 'right_value'
        },
        {
            position: 6,
            playedCard_value: 'bottom_value',
            otherCard_value: 'top_value'
        }
    ], 
    4: [
        {
            position: 1,
            playedCard_value: 'top_value',
            otherCard_value: 'bottom_value'
        },
        {
            position: 5,
            playedCard_value: 'right_value',
            otherCard_value: 'left_value'
        }, 
        {
            position: 7,
            playedCard_value: 'bottom_value',
            otherCard_value: 'top_value'
        }
    ],
    5: [
        {
            position: 2,
            playedCard_value: 'top_value',
            otherCard_value: 'bottom_value'
        },
        {
            position: 4,
            playedCard_value: 'left_value',
            otherCard_value: 'right_value'
        }, 
        {
            position: 6,
            playedCard_value: 'right_value',
            otherCard_value: 'left_value'
        }, 
        {
            position: 8,
            playedCard_value: 'bottom_value',
            otherCard_value: 'top_value'
        }
    ], 
    6: [
        {
            position: 3,
            playedCard_value: 'top_value',
            otherCard_value: 'bottom_value'
        },
        {
            position: 5,
            playedCard_value: 'left_value',
            otherCard_value: 'right_value'
        }, 
        {
            position: 9,
            playedCard_value: 'bottom_value',
            otherCard_value: 'top_value'
        }
    ], 
    7: [
        {
            position: 4,
            playedCard_value: 'top_value',
            otherCard_value: 'bottom_value'
        },
        {
            position: 8,
            playedCard_value: 'right_value',
            otherCard_value: 'left_value'
        }
    ], 
    8: [
        {
            position: 5,
            playedCard_value: 'top_value',
            otherCard_value: 'bottom_value'
        },
        {
            position: 7,
            playedCard_value: 'left_value',
            otherCard_value: 'right_value'
        }, 
        {
            position: 9,
            playedCard_value: 'right_value',
            otherCard_value: 'left_value'
        }
    ],
    9: [
        {
            position: 6,
            playedCard_value: 'top_value',
            otherCard_value: 'bottom_value'
        },
        {
            position: 8,
            playedCard_value: 'left_value',
            otherCard_value: 'right_value'
        }
    ]
}

class Game extends Component {
    state = { 
        allCards: [],
        board: [{ position: 1, card: null }, {position: 2, card: null}, {position: 3, card: null},
            {position: 4, card: null}, {position: 5, card: null}, {position: 6, card: null},
            {position: 7, card: null}, {position: 8, card: null}, {position: 9, card: null}], 
        selectedCard: null, 
        selectedPosition: null, 
        playerHand:[], 
        opponentHand: [], 
        playerScore: 5, 
        opponentScore: 5, 
        currentPlayer: ""
    }    

    componentDidMount() { 
        // fetch all cards 
        // deal hands
        // pick starting player
        // set selected card based on starting player
        this.fetchAllCards();
        this.pickStartingPlayer();
    }

    fetchAllCards() { 
        fetch(allCards)
            .then(res => res.json())
            .then(allCards => this.setState({ allCards }, () => this.dealHands()))
    }

    dealHands = () => {  
        let allCardsCopy = [...this.state.allCards]
        let playerHand = []
        let opponentHand = []

        while (playerHand.length < 5) {
            let newCard = allCardsCopy.splice([Math.floor(Math.random() * allCardsCopy.length)], 1)[0]
            console.log(newCard)
            playerHand.push(newCard)             
        }    

        while (opponentHand.length < 5) {
            let newCard = allCardsCopy.splice([Math.floor(Math.random() * allCardsCopy.length)], 1)[0]
            opponentHand.push(newCard)
        }
        
        playerHand.map(card => card.possession = "blue")
        opponentHand.map(card => card.possession = "red")
        
        this.setState({ playerHand, opponentHand })
    }

    pickStartingPlayer = () => { 
        if (Math.floor(Math.random() * 2) === 0) { 
            this.setState({ currentPlayer: PLAYER_ONE })
            alert("Welcome to Triple Triad It's Player One's turn!")
        } else { 
            this.setState({ currentPlayer: PLAYER_TWO})
            alert("Welcome to Triple Triad It's Player Two's turn!")
        }
    }    
    
    selectCard = (selectedCard) => { 
        this.setState({ selectedCard })
    } 

    revealPositionCursor = (selectedPosition) => { 
        const selectedPositionDiv = document.getElementsByClassName(`position-${selectedPosition}`)[0]
        selectedPositionDiv.className = `cursor-board-position position-${selectedPosition}`

        const positionCursor = document.createElement('img')
        positionCursor.className = "position-cursor"
        positionCursor.src = cursorImg

        
        selectedPositionDiv.appendChild(positionCursor)
    }

    removePositionCursor = (selectedPosition) => { 
        const cursor = document.getElementsByClassName("position-cursor")[0]
        cursor.remove()
        
        document.getElementsByClassName("cursor-board-position")[0].className = `board-position position-${selectedPosition}`
    }

    // need to make it so that the cursor is removed from the DOM when 
    // 1. another card OR 2. another board position is selected (think state changes)

    selectPosition = (selectedPosition) => { 
        if (this.state.selectedPosition !== selectedPosition && this.state.selectedCard) { 
            this.setState({ selectedPosition }, this.revealPositionCursor(selectedPosition))
        } else if (this.state.selectedPosition === selectedPosition && this.state.selectedCard) { 
            this.removePositionCursor(selectedPosition)
            this.playCard(); 
        }
    }

    isValid(boardItem) { 
        if (boardItem["card"] !== null) { 
            alert("There's already a card there.")
            return boardItem
        } else {
            return { ...boardItem, card: this.state.selectedCard }
        }
    }

    calculateScore = (positionClone) => { 
        if (positionClone.card.possession === "red") {
            let playerScore = this.state.playerScore
            let opponentScore = this.state.opponentScore
            
            playerScore--
            opponentScore++
    
            this.setState({ playerScore, opponentScore })
        } else {                             
            let playerScore = this.state.playerScore
            let opponentScore = this.state.opponentScore
            
            playerScore++
            opponentScore--
    
            this.setState({ playerScore, opponentScore })
        }
    }  

    compareCardValues(newBoard) { //passing an argument of the newBoard's configuration, after having played a card
        let board = newBoard //setting the new board to the variable board
        let playedCard = this.state.selectedCard //setting the player selected card to variable playedCard 
        let selectedPosition = this.state.selectedPosition //setting the player selected card to variable playedCard         

        // eslint-disable-next-line 
        let flippedPositions = comparisonMap[selectedPosition].map(comparisonObj => { //mapping through comparisonMap to obtain necessary information for comparison 
            let position = comparisonObj.position - 1 //adjusting for positioning
            let boardPosition = board[position] //setting current boardPosition to the positon variable
                
            if (boardPosition.card) {//if the boardPosition indicated in comparisonMap is not null
                if (playedCard[comparisonObj.playedCard_value] === "A" && board[position].card[comparisonObj.otherCard_value] <= 9 && playedCard.possession !== board[position].card.possession) {
                    //and if the selected card's value is "A" AND the other card's card value less than or equal to 9 AND that card's possession is NOT the same as playedCard
                    let positionClone = { position: board[position]["position"] } // make a clone of the position to end up with {position: 9}
                    const card = board[position]["card"] // add the card's properties to end up with {position: 9, card: {all of the key/values}
                    let cardClone = card.possession === "blue" ? { ...card, possession: "red" } : { ...card, possession: "blue" }
                    // change color to opposite color to show possession change from blue to red or vice versa
                    positionClone.card = cardClone; //add that card to the position

                    this.calculateScore(positionClone) //calculates score
                    
                    return positionClone //returns position to later modify Board state with
                    
                } else if (playedCard[comparisonObj.playedCard_value] > board[position].card[comparisonObj.otherCard_value] && playedCard.possession !== board[position].card.possession) {
                    let positionClone = { position: board[position]["position"] } 
                    const card = board[position]["card"] 
                    let cardClone = card.possession === "blue" ? { ...card, possession: "red" } : { ...card, possession: "blue" }
                    positionClone.card = cardClone;

                    this.calculateScore(positionClone)
                    
                    return positionClone

                } else if (playedCard[comparisonObj.playedCard_value] > board[position].card[comparisonObj.otherCard_value] && playedCard.possession === board[position].card.possession) {
                    return board[position] // return same position if nothing above is true
                } else if (playedCard[comparisonObj.playedCard_value] < board[position].card[comparisonObj.otherCard_value]) { 
                    return board[position] // return same position if nothing above is true
                } else if (playedCard[comparisonObj.playedCard_value] === board[position].card[comparisonObj.otherCard_value]) { 
                    return board[position] // return same position if nothing above is true
                } 
            } else { 
                return boardPosition
            }
        })
        return flippedPositions //returns new board with all flipped positions to modify Board state with
    }

    updateBoard = (newestBoard) => {
        let flippedPositions = this.compareCardValues(newestBoard) 

        let newBoard = newestBoard.map(positionObj => { 
            let matchedPosition = flippedPositions.find(flippedPosition => flippedPosition.position === positionObj.position)

            if (matchedPosition) {
                return matchedPosition                    
            } else {                
                return positionObj
            }
        })
        return newBoard
    }    

    updateHand() { 
        if (this.state.currentPlayer === PLAYER_ONE) { 
            let playerHand = this.state.playerHand.filter(card => card.id !== this.state.selectedCard.id)
            this.setState({ playerHand }, this.nextTurn())            
        } else { 
            let opponentHand = this.state.opponentHand.filter(card => card.id !== this.state.selectedCard.id)
            this.setState({ opponentHand }, this.nextTurn())
        }
    }

    playCard = () => { 
        let boardCopy = [...this.state.board]

        let updatedBoard = boardCopy.map(boardItem => {
            if (boardItem["position"] === this.state.selectedPosition) {
                return this.isValid(boardItem)
            } else {
                return boardItem
            }
        })

        let finalBoard = this.updateBoard(updatedBoard)

        this.updateHand()

        this.setState({ board: finalBoard, selectedCard: null, selectedPosition: null })
    }  

    nextTurn = () => { 
        if (this.state.currentPlayer === PLAYER_ONE) { 
            this.setState({ currentPlayer: PLAYER_TWO })
        } else {
            this.setState({ currentPlayer: PLAYER_ONE})
        }
    }

    render() {  
        return (
            <div className="game-space">
                <div className="game-space-1"/>
                <div className="game-space-2"/>
                <div className="game-space-3"/>
                <div className="game-space-4">
                    <OpponentHandContainer opponentHand={this.state.opponentHand} selectCard={this.selectCard} selectedCard={this.state.selectedCard} opponentScore={this.state.opponentScore}/>
                </div>
                <div className="game-space-5">
                    <Board board={this.state.board} selectPosition={this.selectPosition}/>
                </div>
                <div className="game-space-6">
                    <PlayerHandContainer playerHand={this.state.playerHand} selectCard={this.selectCard} selectedCard={this.state.selectedCard} playerScore={this.state.playerScore}/>
                </div>
                <div className="game-space-7"/>
                <div className="game-space-8"/>
                <div className="game-space-9"/>
            </div>                
        );
    }
}

export default Game;
