import React from 'react'

import Card from '../Card/Card'
import './CardsList.css'

const CardList = (props) => {
    return (
        <div className='card__list'>
            {
                props.monsters.map(monster => (
                    <Card key = {monster.id} monster = {monster} />
                ))
            }
        </div>
    )
}

export default CardList;