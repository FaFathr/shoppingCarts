import React from 'react'
import { FaListUl } from 'react-icons/fa'
import { createQueryObject } from '../helpers/helper';
import styles from './Sidebar.module.css'
import { categories } from '../constants/list';
function Sidebar({query,setQuery }) {
    const categoryHandler = (event) =>{
        const {tagName } = event.target;
        const category = event.target.innerText.toLowerCase();
    if( tagName ===! "LI" ) return;
    setQuery((query)=>createQueryObject(query,{category}))
    };
  return (
    <div >
    <div className={styles.Sidebar}>
      <FaListUl />
      <p>categories</p>
      <ul onClick={categoryHandler} >
        {
          categories.map((item)=>(<li key={item.id} 
            className={item.type.toLowerCase()=== query.category ? styles.selected : null}>
            {item.type}
            </li>))
        }
     
      </ul>
    </div>
    </div>
  )
}

export default Sidebar
