import { useReducer,useState} from "react"

const useCustom=(validetedvalue)=>{
const[istouched,setistouched]=useState(false)
const[entervalue,setentervalue]=useState("")
const isvalid=validetedvalue(entervalue)
const blurvalue=()=>{
   setistouched(true)
}
const changevalue=(event)=>{
  setentervalue(event.target.value)
}
const returnvalue=()=>{
    setentervalue("")
    setistouched(false)
}

const iserror=!isvalid&&istouched

return{
    entervalue:entervalue,
    blurvalue:blurvalue,
    changevalue:changevalue,
    returnvalue:returnvalue,
    iserror:iserror
}

}
export default useCustom