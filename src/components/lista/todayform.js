import { useRef } from "react"
const Todayform=(props)=>{

   const inputref=useRef()
   const addinput=(event)=>{
    event.preventDefault();
    const nn=inputref.current.value
    props.onaddtodayform(nn)
   }
return(<div>
 <form onSubmit={addinput}>
    <input ref={inputref} type="date"></input>
   <button >SEARCH</button> </form>
  </div>)
}
export default Todayform