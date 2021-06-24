import { InputTextarea } from 'primereact/inputtextarea';
import './../CompomentsCss/TextAreaQuestion.css';


function TextAreaQuestion(props) {

    return (
        <div className = 'TextAreaQuestion-Body'> 
            <p style={{fontSize: 'calc(10px + 1vmin)'}}> {props.question}</p>
            <InputTextarea rows={5} cols={30} style={{marginTop: '15px'}} />    
        </div>
    );

}

export default TextAreaQuestion;