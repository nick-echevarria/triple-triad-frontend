import React from 'react';
import '../css/CardContainer.css'

export const CardContainer = (props) => {

    let {
        name,
        top_value,
        bottom_value,
        left_value,
        right_value,
        // affinity,
        card_number, 
        possession,
        selectedCard
    } = props

    const getCardImage = (cardNumber) => { 
        if (cardNumber.toString().length === 2) { 
            return require("../images/cards/0" + cardNumber + ".png")
        } else { 
            return require("../images/cards/" + cardNumber + ".png")
        }
    }    
    
    const handleCardClick = (selectedCard) => { 
        props.selectCard(selectedCard);
    }    

    // const setCardClassName = () => { 
    //     if (selectedCard === null) { 
    //         return "card"
    //     } else if (selectedCard.name === name) { 
    //         return "card selected-card"
    //     } else { 
    //         return "card"
    //     }
    // }

    return (
        <div className={selectedCard === null || selectedCard.name !== name ? `${possession}-hand-card` : `${possession}-hand-card selected-card`} onClick={() => handleCardClick(props)}>
            <div className="rank-container">
                <img className="top-value" alt="rank" src={require(`../images/rank-${top_value}.png`)} />
                    <div className="middle-values">
                        <img className="left-value" alt="rank" src={require(`../images/rank-${left_value}.png`)} />
                        <img className="right-value" alt="rank" src={require(`../images/rank-${right_value}.png`)}  />              
                    </div>
                <img className="bottom-value" alt="rank" src={require(`../images/rank-${bottom_value}.png`)} />
            </div>
            <img className={`card-image ${possession}-card`} alt={name} src={getCardImage(card_number)}/>
        </div> 
    );

}

export default CardContainer;
