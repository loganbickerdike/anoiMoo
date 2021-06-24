import './../CompomentsCss/ButtonBar.css';
import {Button} from 'primereact/button';

function ButtonBar(props){

    return(
        <div className= 'ButtonBar-Body'>
           <Button onClick = {props.onButtonClick} type='button' label ='Submit' icon='pi pi-check'/>
        </div>

    );

}

export default ButtonBar;