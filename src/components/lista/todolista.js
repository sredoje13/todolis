import Inputlist from "./inputlist"
import classes from './inputlist.module.css'
import Currdatas from "./curdatas"
import Helpers from "./todohelp"
import { useState,useCallback,  useEffect} from "react"
import Todaydatas from "./todaydatas"
import Todayform from "./todayform"
import LOading from "./loadingspiner"
import { Link } from "react-router-dom"

const Todolist=()=>{
  
  const [showtodi,setshowtod]=useState(false)
   

  const[isloading,setisloading]=useState(false)
 
  const [showtf,setshowtf]=useState(false)
     const [pushitems,setpush]=useState([])
   const[showinglist,setlist]=useState(false)
  const[showtodayforms,setshowtodayforms]=useState([])
    const [buble,setbuble]=useState(false)
   /* useEffect(() => {
        const interval = setInterval(() => {
          setbuble(prevval=>!prevval)
        }, 1000);
      
        return () => clearInterval(interval);
      }, []);  */
    const clasname=buble?classes.header:classes.footer2
    const newfunkc=()=>{
      setlist(prevvalue=>!prevvalue)
      setshowtf(false)
    }
    let listing;

    if(showinglist){
      listing=classes.divicc
    }
    else {listing=classes.divicc2}
  
  const showingbydate =useCallback(async()=>{
     /* setshowtf(true)
     setlist(false) */
      setisloading(true)
      const response=await fetch("https://todolist-1da37-default-rtdb.firebaseio.com/items.json")
      const data=await response.json()
     const datass= Object.entries(data);
     console.log(datass)
     
     let arr=[]
     for(let i=0;i<datass.length;i++){
      const datas2=datass[i][1]
     arr.push(datas2)
     
     setpush(arr)
     }
    
      setisloading(false)
    },[])
    useEffect(()=>{
      showingbydate()

    },[showingbydate])
    console.log(pushitems)
    const showtoday=(()=>{

      setshowtf(prevval=>!prevval)
    })

    
    let showtod=false
    const showtodayform=(x)=>{
  const forthisday=pushitems.filter((item)=>item.date===x)
  console.log(forthisday)
  if(forthisday!==[]){
    showtod=true
    } 
   
      setshowtod(showtod)
    
   setshowtodayforms(forthisday)
       }
       
 console.log(showtodayforms)
 console.log(showtodi)


   const definp=/* selectclick?(<div className={classes.selectitem} >vv</div>): */showtodayforms.map((item)=>(<div>
   <Todaydatas key={item.id} task={item.task}/></div>
   ))
 
return(<div>
  <p className={clasname} >WRITE ALL OBLIGATIONS AND TASKS<br></br>
  <span onClick={showtoday}className={classes.span}> TASKS FOR DAY </span> OR<span className={classes.span} onClick={newfunkc}> MAKE  NEW TASKS TODAY FOR FUTURE</span></p>
<div className={classes.todo} style={{justifyContent:"center", alignItems:"center"}}>
    <Inputlist />
   {!showtf&&showinglist&&<div className={listing}>
  <Helpers childeren="See your obligations for today"/> 
    <Currdatas/></div>}
 {showtf&&!isloading&&<div className={classes.addinputt}>
   <Helpers childeren={showtodi?"Search your obligations":"Dont have tasks for this day"}/>
  <div className={classes.overflow}>{definp}</div>
<Todayform onaddtodayform={showtodayform}/>
  </div>}
 { isloading&&<LOading/>}</div>
 <p className={classes.footer} >  SHOW YOUR <Link to='/alltask'> ALL TASKS </Link></p>
 </div>
)
}
export default Todolist