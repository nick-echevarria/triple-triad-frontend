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
        possession
    } = props

    const getCardImage = (cardNumber) => { 
        if (cardNumber.toString().length === 2) { 
            return "images/cards/0" + cardNumber + ".png"
        } else { 
            return "images/cards/" + cardNumber + ".png"
        }
    }    
    
    const handleCardClick = (selectedCard) => { 
        props.selectCard(selectedCard);
    }    

    return (
        <div className="card" onClick={() => handleCardClick(props)}>
            <img className={`card-image ${possession}-card`} alt={name} src={getCardImage(card_number)}/>
            <img className="top-value" alt="rank" src={`images/rank-${top_value}.png`} />
                <div className="middle-values">
                    <img className="left-value" alt="rank" src={`images/rank-${left_value}.png`} />
                    <img className="right-value" alt="rank" src={`images/rank-${right_value}.png`}  />              
                </div>
            <img className="bottom-value" alt="rank" src={`images/rank-${bottom_value}.png`} />
        </div> 
    );
}

export default CardContainer;

        // <div className="card" onClick={() => handleCardClick(props)}>
        //     <div className="rank-container"> 
        //         <img className="top-value" alt="rank" src={`images/rank-${top_value}.png`} />
        //         <div className="middle-values">
        //             <img className="left-value" alt="rank" src={`images/rank-${left_value}.png`} />
        //             <img className="right-value" alt="rank" src={`images/rank-${right_value}.png`}  />              
        //         </div>
        //         <img className="bottom-value" alt="rank" src={`images/rank-${bottom_value}.png`} />
        //     </div>
        //     <img className={`card-image ${possession}-card`} alt={name} src={getCardImage(card_number)}  />
        // </div> 
