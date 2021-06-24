import {RadioButton} from 'primereact/radiobutton';
import {useState} from 'react';
import './../CompomentsCss/RadioButtonQuestions.css';

function RadioButtonQuestion(props) {

  const [radio, setRadio] = useState('');

  return (
    <div className="RadioButtonQuestion-Body">

      <p className="RadioButtonQuestion-Question" >{props.question}</p>

      <div className = 'RadioButtonQuestions-radioButtons'>

        <RadioButton className='RadioButtonQuestions-Label' inputId="city1" value="Great" onChange={(e) => setRadio(e.target.value)} checked={radio === 'Great'} />
        <label className="RadioButtonQuestions-Label" htmlFor="city1">Great</label>  

        <RadioButton className='RadioButtonQuestions-Label'  inputId="city2"  value="Good" onChange={(e) => setRadio(e.target.value)} checked={radio === 'Good'} />
        <label className="RadioButtonQuestions-Label" htmlFor="city2">Good</label>
        
        <RadioButton className='RadioButtonQuestions-Label'  inputId="city2"  value="So so" onChange={(e) => setRadio(e.target.value)} checked={radio === 'So so'} />
        <label className="RadioButtonQuestions-Label" htmlFor="city2">So so</label>

        <RadioButton className='RadioButtonQuestions-Label'  inputId="city2"  value="Not so good" onChange={(e) => setRadio(e.target.value)} checked={radio === 'Not so good'} />
        <label className="RadioButtonQuestions-Label" htmlFor="city2">Not so good</label>

        <RadioButton className='RadioButtonQuestions-Label'  inputId="city2"  value="Terible" onChange={(e) => setRadio(e.target.value)} checked={radio === 'Terible'} />
        <label className="RadioButtonQuestions-Label" htmlFor="city2">Terible</label>
    </div>
  
    </div>
  );
}

export default RadioButtonQuestion;