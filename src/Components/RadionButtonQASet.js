import {RadioButton} from 'primereact/radiobutton';
import {useState} from 'react';
import './../CompomentsCss/RadioButtonQuestions.css';

function RadionButtonQASet(props) {

  const [radio, setRadio] = useState('');

  return (
    <div className="RadioButtonQuestion-Body">

      <p className="RadioButtonQuestion-Question" >{props.question}</p>

      <div className = 'RadioButtonQuestions-radioButtons'>
        {props.answers.map((s, index )=> {
         return ( 
           <>
          <RadioButton key={index} className='RadioButtonQuestions-Label' inputId={index} value={s} onChange={(e) => setRadio(e.target.value)} checked={radio === {s}} />
          <label key={index} className="RadioButtonQuestions-Label" htmlFor={index}>{s}</label>  
          </> )
   
        })}
    </div>
  
    </div>
  );
}

export default RadionButtonQASet;