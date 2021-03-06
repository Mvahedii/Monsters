import React from 'react'

import './Card.css'

const Card = (props) => {
    return (
        <div className='card__container'>
            <img
                alt = {props.monster.name}
                src = {`https://robohash.org/${props.monster.id}?set=set1&size=180x180`}
            />
            <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
        </div>
    )
}

export default Card;