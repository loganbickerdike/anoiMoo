import './../CompomentsCss/NavBar.css';
import {Link} from 'react-router-dom';
import { useState } from 'react';

 function NavBar(props){

    const [loggedIn, setLoggedIn] = useState(false);
    const [loggedInTxt, setLoggedInTxt] = useState('Login | Sign up ');

    var logInLogOutTxt = 'Login | Sign up ';

    var logInSignUp = (e) =>{
        e.preventDefault(); 
        setLogInLogOutState();     
       } 

    var setLogInLogOutState = () =>{
        setLoggedIn(!loggedIn);
        loggedIn ? setLoggedInTxt('Login | Sign up '): setLoggedInTxt('Logout');
        props.linkClicked(loggedIn);

    }    

    return (
        <div className = 'NavBar-Body'>
            <div className='NavBar-section'>
            {loggedIn && <Link to='' >Home</Link>}
            </div>

            <div className='NavBar-section'>
                { loggedIn && 
                <>             
                <Link to='/users' >Users</Link>
                <Link to='/teams' >Teams</Link>
                <Link to='/survey' >Survey</Link>         
                <Link to='/publish' >Publish</Link>      
                <Link to='/results' >Results</Link>           
                </>
                } 
            </div>

            <div className='NavBar-section'>
            <a href='/'  onClick={logInSignUp} >{loggedInTxt} </a>   
            </div>

        </div>    
    )

 }

 export default NavBar;