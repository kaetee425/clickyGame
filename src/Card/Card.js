import React from 'react'
import './Card.css'

const Card = (props) => (
	<img onClick={() => props.onClick(props.friend.id)} src={props.friend.image} className="card"/>
)

export default Card 