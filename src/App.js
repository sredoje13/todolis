import logo from './logo.svg';
import './App.css';
import Formaa from './components/forma/form';
import bgvideo from './Snowflakes_Falling_Motion_Background_4K.mp4'
import { Switch,Route, Redirect } from 'react-router-dom';
import Image from "./Screenshot from 2022-12-15 22-23-34.jpg"
import Todolist from './components/lista/todolista';
import Alltasklist from './alltasklist';
function App() {
  return (
    <div className="App">
      <video  autoPlay loop muted>
        <source src={bgvideo} type='video/mp4'/>
      </video>
      <img src={Image} alt="slickaa" className='image' style={{
        position:"relative", zIndex:-2,
        width:"100%",
        opacity:0.5,
    marginTop:"-10px",
    transform: "rotate(180deg)"}}></img>
      <div className='content'>
        <Switch>
        <Route path="/welcome" exact>
      <Formaa/>
      </Route>
      <Route path="/lista" exact><Todolist/></Route>
      <Route path="/alltask">
     <Alltasklist/>
      </Route>
     </Switch>
      </div>
     
    </div>
   
  );
}

export default App;
