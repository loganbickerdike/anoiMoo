import {RadioButton} from 'primereact/radiobutton';
import {useState} from 'react';
import './../CompomentsCss/RadioButtonQuestion.css'

function RadioButtonQuestionBool() {

  const [radio, setRadio] = useState('');

  return (
    <div className="RadioButtonQuestion">

      <p>Is this job is the best job you have ever had?</p>

        <div className="RadioButtonQuestion-radioButton">
          <RadioButton inputId="city1" value="True" onChange={(e) => setRadio(e.target.value)} checked={radio === 'True'} />
          <label className="RadioButtonQuestion-Label" htmlFor="city1">True</label>  
        </div>

        <div className="RadioButtonQuestion-radioButton">
        <RadioButton inputId="city2"  value="False" onChange={(e) => setRadio(e.target.value)} checked={radio === 'False'} />
        <label className="RadioButtonQuestion-Label" htmlFor="city2">False</label>
        </div>
  
    </div>
  );
}

export default RadioButtonQuestionBool;