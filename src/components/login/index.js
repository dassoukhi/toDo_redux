import React from 'react';
import Logo from "../logo";
import LoginForm from "../loginForm";
import { useHistory } from "react-router-dom";

const Login = () => {
    const history = useHistory()

    if (localStorage.getItem('token')) {
        history.push('/characters')
    }
    return (
        <div>
            <Logo/>
            <LoginForm/>
        </div>
    );
};

export default Login;