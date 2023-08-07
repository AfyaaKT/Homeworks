import React from 'react'
import { Link } from 'react-router-dom';

const Card = (props) => {
    const myCartoon=props.cartoonlist
  return (
    <div>
        {myCartoon.map(item=><div>{item}</div>)}
    </div>
  )
}

export default Card;