import axios from 'axios';
import React, {useState} from 'react';
import { useHistory } from "react-router-dom";

const LoginForm = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()
    var token = localStorage;

    const sendForm = ()=>{
        if (userName && password) {
            console.log(userName + " " + password)
            axios.post('https://easy-login-api.herokuapp.com/users/login', {username: userName, password: password})
            .then(response =>{ 
                console.log(response)
                token.setItem('token', response.headers['x-access-token'])
                if (token.getItem('token')) {
                    history.push('/characters') 
                }
            })
        }
        else{
            alert("Veuillez remplir les deux champs svp.")
        }
    }
    return (
        <div>        
            <p>Username</p>
            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)}/>
            <p>Password</p>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/> <br/>
            <button onClick={sendForm}>Connexion</button>   
        </div>
    );
};

export default LoginForm;