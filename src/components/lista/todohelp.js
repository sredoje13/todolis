import {GiBottomRight3DArrow} from 'react-icons/gi'
import classes from './inputlist.module.css'
const Helpers=(props)=>{
return(
    <div className={classes.arrow}> 
    <GiBottomRight3DArrow className={classes.arrow2}/>
      <p className={classes.p}>
      {props.childeren}</p>
      <GiBottomRight3DArrow className={classes.arrows}/>
      </div> 
)
}
export default Helpers