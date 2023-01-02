
import { useCallback,useEffect,useState } from "react";
import classes from './alltask.module.css'
import { useDispatch,useSelector } from "react-redux";
import { deleteit } from "./redux/redux";
;

const Alltask=(props)=>{
  const[reload,setreload]=useState(false)
  const itt=useSelector((state)=>state.deleteitem.item)
 const {key,task,date,name}=props
    const dispatch=useDispatch()
   
    const deleteitems=useCallback(async()=>{
       dispatch(deleteit.delete(
       { key,
        task,
        date,
        name}
  
      ))
      const response = await fetch(`https://todolist-1da37-default-rtdb.firebaseio.com/items/${itt.name}.json`, {
        method: 'DELETE', 
        headers: {
          'Content-Type': 'application/json'
        },
       
    });
 
   const data = await response.json( );
 
   // now do whatever you want with the data  
    console.log(data);
  setreload(true)
    
    },[date, dispatch, itt.name, key, name, task])
 
   useEffect(()=>{
 if(reload===false){
  return
 }
 else {
  const cleaner=setTimeout(()=>{
window.location.reload()
  },2000)
 
 return()=>{
  clearTimeout(cleaner)
 }
 } })
 
  
  
    
    /*  const deleteitems=async()=>{
        
        const filtering= deletee.filter((item)=>item.key===itt.id)
     const mm=filtering[0];
     console.log(mm)
     */
    /*  useEffect(()=>{
deleteitems()
     },[deleteitems]) */
  

    return(

        <div>
           <div  id={props.id}className={classes.alltask}>
  <div className={classes.divic} >{props.task}</div>
<div className={classes.date}>{props.date}</div ><div style={{display:"none"}}>{props.name}</div>
  <button onClick={deleteitems}  className={classes.button} >delete</button>
  </div>
            
        </div>
    )
}
export default Alltask