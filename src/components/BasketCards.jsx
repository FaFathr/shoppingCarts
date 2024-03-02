import React from 'react'
import { shortenText } from '../helpers/helper'
import { MdDelete } from "react-icons/md";
import styles from './BasketCards.module.css'
function BasketCards({data , clickHandler}) {
    const{image ,title,quantity} =data;
      return (

    <div className={styles.card}>
      <img src={image} alt={title} />
      <p>{shortenText(title)}</p>
      <div className={styles.actions}>
      {
    quantity === 1 &&
    (
         <button onClick={()=>clickHandler("REMOVE_ITEM",data)}><MdDelete/></button>
         )
      }
      {quantity > 1 &&  (
        <button onClick={()=>clickHandler("DECREASE",data)}>-</button>
      )}
      <span>{quantity}</span>
      <button onClick={()=>clickHandler("INCREASE",data)}>+</button>
      </div>
    </div>
  )
}

export default BasketCards
