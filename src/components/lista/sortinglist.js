import classes from './currdatas.module.css'
import { useState } from 'react'
import {BiRightArrow} from 'react-icons/bi'
const Sortlist=(props)=>{
  
    const[showlistsort,setshovlistsort]=useState(false)
    const showsort=()=>{
        setshovlistsort(prevvalue=>!prevvalue)
        }
        
        const classort=showlistsort?classes.sroting:classes.normal
    return(
       <div className={classes.p} id={props.id}>
        <button className={classes.sortlist} onClick={showsort}>Sort<BiRightArrow className={classort}/></button>
        {showlistsort&& <div className={classes.lista}>
    <button className={classes.ul} onClick={props.sortbyname}>name</button>
       </div>}
        </div>
    )
}
export default Sortlist