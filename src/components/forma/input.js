import classes from './imput.module.css'
import { useSelector,useDispatch } from 'react-redux'
import { logaction } from '../../redux/redux'
import useCustom from '../../redux/custom'
import GoogleButton from 'react-google-button'
import { singInwithgoogle } from '../../firebase'
import { useHistory } from 'react-router-dom'
const Input=()=>{
    const dispatch=useDispatch()
    const backtolog=()=>{
    dispatch(logaction.getback())
    }
 const history=useHistory()
    const islogin=useSelector((state)=>state.loging.log)
    let validvalue=entervalue=>entervalue.trim()!==""
   let validateemail=entervalue=>entervalue.includes("@");
   let validateform=entervalue=>entervalue.match(1,2,3,4,5,6,7,8,9,0)
   const validatenumber=entervalue=>entervalue.length>=9&&entervalue.length<14
    const { entervalue:inputvalue,
        blurvalue:blurinput,
        changevalue:changeinput,
        returnvalue:returninput,
        iserror:iserrorinput}=useCustom(validvalue)
const { entervalue:mailvalue,
    blurvalue:blurmail,
    changevalue:changemail,
    returnvalue:returnmail,
    iserror:iserrormail}=useCustom(validvalue&&validateemail)
    const { entervalue:passwordvalue,
        blurvalue:blurpassword,
        changevalue:changepassword,
        returnvalue:returnpassword,
        iserror:iserrorpassword}=useCustom(validvalue&&validateform)
        const { entervalue:numbervalue,
            blurvalue:blurnumber,
            changevalue:changenumber,
            returnvalue:returnnumber,
            iserror:iserrornumber}=useCustom(validateform&&validatenumber)
            let formisvalid=false;
            if(!iserrorinput&&!iserrormail&&!iserrornumber&&!iserrorpassword){
                formisvalid=true
            }
            
const submitHandler=(event)=>{
    event.preventDefault();
    if(formisvalid){
    returninput();
    returnmail();
    returnpassword();
    returnnumber()
  let url;
    if(islogin){
        url="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCfIOTu_dlekm1iXzDD0y7ASYdmWHz7ZHU"
    }
    else {url="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCfIOTu_dlekm1iXzDD0y7ASYdmWHz7ZHU"
    }
  fetch(url,{
    method:"POST",
    body:JSON.stringify({
    email:mailvalue,
    password:passwordvalue,
    returnSecureToken:true}),
   headers:{"Content-Type":"application/json"}})
  .then(async (res)=>{
    if(res.ok){if(!islogin){
        const btn=(<button onClick={ dispatch(logaction.getback())}></button>)
        alert(`you make new account, ${btn}`)}
        else(
            alert("successfuly loggin")
        
        )
        history.replace('/lista')
        return res.json()
    }
    else{
        const data = await res.json()
        let errmessage = "authentication failed"
        throw new Error(errmessage)
    }
  }).catch((error)=>{
    alert(error)
  })
}

    return;
    
}

const inputclass=!iserrorinput?classes.formitem:classes.error
const mailclass=!iserrormail?classes.formitem:classes.error
const passwordclass=!iserrorpassword?classes.formitem:classes.error;
const numberclass=!iserrornumber?classes.formitem:classes.error
  

    const al1=(<div>write correct name</div>)
    const al2=(<div>write correct e-mail(include @)</div>)
    const al3=(<div>write correct password(include letters and numbers)</div>)
    const al4=(<div>write correct phone number</div>)
    const nameee=islogin?"Login":"Create account"
return(

    <form className={classes.form} onSubmit={submitHandler}>
        <input onChange={changeinput} onBlur={blurinput} value={inputvalue} 
        className={inputclass} type="text" placeholder="Name">
        </input > {iserrorinput&&al1}
        <input onChange={changemail} onBlur={blurmail} value={mailvalue} 
        className={mailclass} type="e-mail" placeholder="E-mail">
        </input> {iserrormail&&al2}
        <input  onChange={changepassword} onBlur={blurpassword} value={passwordvalue} 
        className={passwordclass} type="password" placeholder="Password">
        </input> {iserrorpassword&&al3}
        {!islogin&&<input onChange={changenumber} onBlur={blurnumber} value={numbervalue} 
        className={numberclass} type="text" placeholder="Mobile phone" ></input>}
       {!islogin&&iserrornumber&&al4}
        
      <button className={classes.formbutton}>{nameee}</button>
      {!islogin&&<p onClick={backtolog} className={classes.linkbut} >Back to loggin page </p>} 
      <GoogleButton onClick={singInwithgoogle}/>
    </form>
)
}
export default Input