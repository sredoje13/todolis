import classes from './currdatas.module.css'
import { useSelector,useDispatch } from 'react-redux'
import { showww } from '../../redux/redux'
import { newnew } from '../../redux/redux'
import { addit } from '../../redux/redux'
const Oneitem=(props)=>{
    const {id,task,date}=props
    const dispatch=useDispatch()
    const showtask=()=>{
        dispatch(showww.showstates())
       
        }
        const newfunkc=()=>{
           dispatch(newnew.newstateaction({
             id,
              task,
              date}))
            }
      const removeitem=()=>{
    dispatch(addit.removeitem({
        id,task,date
    }))
      }   
              
return(
    <div className={classes.div1el} onClick={newfunkc} id={props.id}  key={props.id}>
    <div className={classes.item1} >{props.task}</div>
 
   <div className={classes.item2}>{props.date}</div>

   <button className={classes.button1} onClick={removeitem}><b>Delete</b></button>
   <button className={classes.button} onClick={showtask} ><b>Change </b></button>
   </div>)
}
export default Oneitem