import Input from "./input";
import classes from './form.module.css'
import { useDispatch } from "react-redux";
import { logaction } from "../../redux/redux";
const Formaa=()=>{
    const dispatch=useDispatch()
    const createaccount=()=>{
    dispatch(logaction.getaccount())
    }
    return(
        <div className={classes.input}>
            <div className={classes.header}>
                Log in on your account or <span className={classes.llink} onClick={createaccount}>make</span> new
            </div>
            <Input>
            </Input>
        </div>
    )
}
export default Formaa;