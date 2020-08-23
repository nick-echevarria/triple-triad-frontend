import React from 'react';
import '../css/Collection.css'

const Collection = () => {
    return (
        <div className="collection-container">
            <div className="header" />
            <div className="card-list">
                {props.map(card => <Card key={card.id} card={...card}/> )}
            </div>
            <div classname="card-view" />
            <div className="footer" />
        </div>
    );
}

export default Collection;

