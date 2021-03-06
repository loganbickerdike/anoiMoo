import './App.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {useRef, useState} from 'react';
import {Toast} from 'primereact/toast';
import RadioButtonQuestion from  './Components/RadioButtonQuestion';
import TextAreaQuestion from './Components/TextAreaQuestion';
import * as Api from './Api/Api'; 
import ButtonBar from './Components/ButtonBar';
import RadioButtonQASet from './Components/RadionButtonQASet';
import NavBar from './Components/NavBar';
import {Route} from 'react-router-dom';
import Users from './Components/Users';
import Teams from './Components/Teams';
import Survey from './Components/Survey';
import Publish from './Components/Publish';
import Results from './Components/Results';
import BGImage from './Images/farm.jpg';

function App() {
  const [qaSet] = useState(Api.GetQASet());
  const [backGroundImg, setBackGroundImg] = useState(BGImage);

  const toastRef = useRef();

  const onButtonClick = () => {
    toastRef.current.show({severity: 'success', summary: 'Success', detail: 'Survey completed, thank you'});
  } 

  var linkClicked = (e) =>{
    debugger;
    if(e)
      setBackGroundImg(BGImage);   
      else
      setBackGroundImg(null);   

  }

  const renderQASet = (s) =>{
    var component = null;
    switch(s.type){
      case 'radioButton':
        component  = <RadioButtonQASet question = {s.question} answers = {s.answers}/>; break;
      case 'textArea':
        component  = <TextAreaQuestion question = {s.question}/>;  break; 
    }
    return component;  

  }


  return (
    <div className="App" style={{backgroundImage: "url(" + backGroundImg + ")" }}>     
      <NavBar linkClicked={(e) => linkClicked(e)}/>
      <Route path='/users'>
       <Users/>
      </Route>
      <Route path='/teams'>
       <Teams/>
      </Route>
      <Route path='/survey'>
       <Survey/>
      </Route>
      <Route path='/publish'>
       <Publish/>
      </Route>
      <Route path='/results'>
       <Results/>
      </Route>

        {/* <Toast ref={toastRef}/>
        <h1>Helping the team</h1>        
        <p>Our aim is to find out how you are without finding out who you are. Lets get to the questions.</p>
        <hr style={{width: '75%', marginBottom: '85px'}}></hr> 

        <div className= 'App-QuestionBody'> 
          <RadioButtonQASet question = {"Test demo question"} answers = {['happy','sad','drunk']}/>
          {qaSet.map(s => {return renderQASet(s)})}
          <ButtonBar onButtonClick= {onButtonClick}/>     
        </div> */}

    </div>
  );
}

export default App;
