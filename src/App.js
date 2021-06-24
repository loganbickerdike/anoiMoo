import './App.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {InputText} from 'primereact/inputtext';
import {useRef, useState} from 'react';
import {Button} from 'primereact/button';
import {Toast} from 'primereact/toast';
import { InputTextarea } from 'primereact/inputtextarea';
import RadioButtonQuestion from  './Components/RadioButtonQuestion';
import TextAreaQuestion from './Components/TextAreaQuestion';
import { ScrollPanel } from 'primereact/scrollpanel';
import * as Api from './Api/Api'; 
import ButtonBar from './Components/ButtonBar';

function App() {
  const [questions] = useState(Api.GetQuestions());

  const toastRef = useRef();

  const onButtonClick = () => {
    toastRef.current.show({severity: 'success', summary: 'Success', detail: 'Survey completed, thank you'});
  } 

  const renderQuestion = (s) =>{
    if(s.questionType ==='textArea')
      return <TextAreaQuestion question = {s.questionText}/>;
    else if(s.questionType ==='radioButton')  
      return <RadioButtonQuestion question = {s.questionText}/>;

  }


  return (
    <div className="App"> 
        <Toast ref={toastRef}/>
        <h1>Helping the team</h1>        
        <p>Our aim is to find out how you are without finding out who you are. Lets get to the questions.</p>
        <hr style={{width: '75%', marginBottom: '85px'}}></hr> 

        <div className= 'App-QuestionBody'>
          {questions.map(s => { return  renderQuestion(s) })} 

          <ButtonBar onButtonClick= {onButtonClick}/>     
        </div>
    </div>
  );
}

export default App;
