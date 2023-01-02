
import { useSelector,useDispatch} from "react-redux"
import classes from './currdatas.module.css'

import { addit } from "../../redux/redux"
import Changeinput from "./inputforchange"
import Oneitem from "./oneitemlist"
import Sortlist from "./sortinglist"
import { useCallback, useState,useEffect } from "react"


const Currdatas=(props)=>{
  const[isloading,setisloading]=useState(false)
 const [sortingic,setsoringic]=useState(false)
 const [state,setate]=useState([]);
let showsorting=false
  let shownon=true

  const sortbyname=()=>{
  setsoringic(true)
  }
 

 
   
  const statefromdb=useCallback(async()=>{
    setisloading(true)
 const response=await fetch("https://todolist-1da37-default-rtdb.firebaseio.com/items.json")
 const data=await response.json();
const data2=Object.entries(data)
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0')
var yyyy = today.getFullYear();
today =yyyy + '-' + mm + '-'+ dd
console.log(today)
const arr=[]
     for(let i=0;i<data2.length;i++){
      const datas2=data2[i][1];
      if(datas2.date===today){
      arr.push(datas2)
      console.log(arr)
setate(arr)}
setisloading(false)}
  },[])
  useEffect(()=>{
    statefromdb()
  },[statefromdb])
  
  console.log(state.length)
if(state.length>=1){
  showsorting=true

}
if(state.length>0){
  shownon=false
}

   
  
    const allitems=!sortingic?[...state]
    .map((item)=>(  
       <Oneitem id={item.id} date={item.date} task={item.task}
       key={item.id}/> 
    )):
    [...state].sort((a, b) => (a.task)>(b.task)? 1 : -1)
    .map((item)=>(  
      <Oneitem id={item.id} date={item.date} task={item.task}
      key={item.id}/> 
    ))
    console.log(allitems)
    
   

 
 
    return(
        <div className={classes.overflow}>
        {showsorting&&<Sortlist sortbyname={sortbyname} />}
          {allitems}
        {!isloading&&shownon&&<div className={classes.divhelp}> Add your task WITH DATE right</div>
}
      
        </div>
    )
}
export default Currdatas