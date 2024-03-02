import React from 'react'
import { TbChecklist } from "react-icons/tb";
import { FaHashtag } from "react-icons/fa6";
import { BsPatchCheck } from "react-icons/bs";
import styles from "./BasketSidbar.module.css"
function BasketSidbar({state , clickHandler}) {
  return (
    <div>
      <div className={styles.sidbar}>
     <TbChecklist/>
      <p>total:</p>
      <span>{state.total}$</span>
      </div>
      <div>
     <FaHashtag/>
      <p>quantity:</p>
      <span>{state.itemsCounter}</span>
      </div>
      <div>
     <BsPatchCheck/>
      <p>status:</p>
      <span>{!state.checkout &&"Pending..." }</span>
      </div>
      <button onClick={()=>clickHandler("CHECKOUT")}>checkout</button>
    </div>
  )
}

export default BasketSidbar
