import classes from './inputforchange.module.css'
import { useRef } from 'react'
import { addit } from "../../redux/redux"
import { useSelector,useDispatch } from "react-redux"
import { showww } from '../../redux/redux'
const Changeinput=(props)=>{
   
    const inputref=useRef()
    const itemsis=useSelector((state)=>state.additems.items)
     const filtering=itemsis.filter((item)=>item.id===props.id) 
     const newitem=filtering[0];
    
     console.log(newitem)
     console.log(filtering)
    const dispatch=useDispatch()


 const addnewvalue=(event)=>{
    event.preventDefault()
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today =yyyy + '-' + mm + '-'+ dd
    console.log(today)
    const newconst={id:filtering[0].id,
        date:today,
    task:inputref.current.value}
    console.log(newconst)
     dispatch(addit.changeitems( 
{  id:newconst.id,
  task:newconst.task,
  date:newconst.date}
   ))  
dispatch(showww.showstates())

   }
return(<form onSubmit={addnewvalue} className={classes.form}>
    <input ref={inputref} defaultValue={props.value} 
     className={classes.input} type="textarea" />
    <button className={classes.button}>Add</button>
      </form>
)
}
export default Changeinput