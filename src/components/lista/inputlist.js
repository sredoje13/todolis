import classes from './inputlist.module.css'
import useCustom from '../../redux/custom'
import { addit } from '../../redux/redux'
import { useDispatch } from 'react-redux'

const Inputlist=(props)=>{
    const dispatch=useDispatch()
    let formisvalid=false
    const validateinput=entervalue=>entervalue.trim()!==""
const{
    entervalue:valuearea,
    blurvalue:blurarea,
    changevalue:changearea,
    returnvalue:returnarea,
    iserror:iserrorarea

}= useCustom(validateinput)
const {
    entervalue:valuedate,
    blurvalue:blurdate,
    changevalue:changedate,
    returnvalue:returndate,
    iserror:iserrordate

}= useCustom(validateinput)

if(!iserrorarea&&!iserrordate){
formisvalid=true;
}
    const classestext=!iserrorarea?classes.textarea:classes.error;
   let classesdate=!iserrordate?classes.date:classes.errordate
const submithandler=(event)=>{

    event.preventDefault();
    classesdate=formisvalid?classes.date:classes.errordate
   if(formisvalid &&valuearea.trim()!==""&&valuedate.trim()!==""){
    const idd=Math.random()*10
    fetch("https://todolist-1da37-default-rtdb.firebaseio.com/items.json",{
        method:"POST",
        body:JSON.stringify({id:idd,
        task:valuearea,
    date:valuedate}),
        headers:{
            'Content-Type': 'application/json'}
    })
    console.log(valuearea)
    returndate();
    returnarea();
    const kejic=Math.random()*10
    dispatch(addit.additems({
        id:kejic,
        key:kejic,
        task:valuearea,
        date:valuedate,
    }))
   }
   return;
}
   
   
return(
    <form style={props.style}className={classes.formlist} onSubmit={submithandler}>
        <button className={classes.button} >Add</button>
        <input 
        onChange={changearea} onBlur={blurarea}
        value={valuearea} 
        className={classestext} type="text" placeholder={!iserrorarea?"Tasks:":"Write your task!!!"}>
        </input>
        <input onChange={changedate} onBlur={blurdate}
        value={valuedate} className={classesdate}  
        
         type="date" min="2022-11-12"></input>
    </form>
)
}
export default Inputlist