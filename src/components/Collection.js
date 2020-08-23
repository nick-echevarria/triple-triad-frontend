import React from 'react';
import '../css/Collection.css'

const Collection = () => {
    return (
        <div className="collection-container">
            {props.map(card => { 
                card
            } )}
        </div>
    );
}

export default Collection;

