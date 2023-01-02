import classes from './alltask.module.css'
import { useEffect, useState } from 'react'

import { useCallback } from 'react';
import Alltask from './alltasks';
const Alltasklist=(props)=>{
  const [stateitem,setstate]=useState([])
    const[deletee,setselete]=useState([])
    const[filteringvalue,setfilteringvalue]=useState("")
  const callfunction=useCallback(async()=>{    
  const response=await fetch("https://todolist-1da37-default-rtdb.firebaseio.com/items.json")
  try { if(response.ok){
    
        const data=await response.json();
console.log(data)
const data2=Object.entries(data)
console.log(data2)
const arr=[]
     for(let i=0;i<data2.length;i++){
      const data3=data2[i][0]
      const datas2=data2[i][1]
      const datafinaly={name:data3,...datas2}
      console.log(datafinaly)
      arr.push(datafinaly)
      if(filteringvalue.length>0){
        const searchingitem= arr.filter((item)=>item.task.includes(filteringvalue))
        console.log(searchingitem)
        setstate(searchingitem)
       } else{
setstate(arr)}
       }
         
       
    }
 
    else{throw new Error("faild request")}}
    catch(error){
       console.log (error)
    }

},[filteringvalue])

 useEffect(()=>{   
    callfunction();
 },[callfunction])  
 
 
 

               
/*    useEffect(()=>{
    const query=filteringvalue.length===0?""
    :`orderBy="task"&equalTo="${filteringvalue}"` 
    const response= fetch("https://todolist-1da37-default-rtdb.firebaseio.com/items.json"+query)
     const data=response.json()
     const newarr=[]
     for(let onedata in data){
     newarr.push({
      id:data[onedata].id,
      task:data[onedata].task,
      date:data[onedata].date,
      key:onedata
     })
    setstate(newarr)
    }

    },[filteringvalue]
    )
 */

const itemall=stateitem.map((item)=>(
  <Alltask id={item.id} date={item.date} task={item.task} key={item.id}  name={item.name} 
 ></Alltask>
))

return(
<div><form><p className={classes.searchp}>Search your tasks list by name</p>

  <input onChange={event=>setfilteringvalue(event.target.value)} className={classes.search} type="search"></input>
</form>
<p className={classes.searchp}>double click to delete your task</p>
  {itemall}
</div>
)
}
export default Alltasklist