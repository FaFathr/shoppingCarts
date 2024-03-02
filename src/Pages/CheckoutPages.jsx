import React from 'react'
import {useCart} from '../context/CartContext'
import BasketCards from '../components/BasketCards'
import BasketSidbar from '../components/BasketSidbar'
import styles from "./CheckoutPages.module.css"
function CheckoutPages() {
  const [state,dispatch]=useCart()
  const clickHandler= (type,payload)=>dispatch({type,payload})
 if(!state.itemsCounter){
  return <div  className={styles.container}><p>empty</p></div>
 }
  
  return ( 
   <div className={styles.container}>
    <BasketSidbar state={state}/>
     <div className={styles.products} >
      {state.selectedItems.map((product)=>(
      <BasketCards key={product.id} data={product} clickHandler={clickHandler}/>
      ))}
    </div>
    </div>
  

  )
}

export default CheckoutPages
