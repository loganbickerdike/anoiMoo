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

function App() {
  const [qaSet] = useState(Api.GetQASet());

  const toastRef = useRef();

  const onButtonClick = () => {
    toastRef.current.show({severity: 'success', summary: 'Success', detail: 'Survey completed, thank you'});
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
    <div className="App"> 
        <Toast ref={toastRef}/>
        <h1>Helping the team</h1>        
        <p>Our aim is to find out how you are without finding out who you are. Lets get to the questions.</p>
        <hr style={{width: '75%', marginBottom: '85px'}}></hr> 

        <div className= 'App-QuestionBody'> 

        <RadioButtonQASet question = {"Test demo question"} answers = {['happy','sad','drunk']}/>

          {qaSet.map(s => {return renderQASet(s)})}
          <ButtonBar onButtonClick= {onButtonClick}/>     
        </div>
    </div>
  );
}

export default App;
