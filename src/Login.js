import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import {auth} from './firebase';

import './Login.css'
function Login() {
    const history = useHistory();
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('')
   const login=(e)=>{
       e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
    .then((auth)=>{
        console.log(auth)
        history.push('/');
    }).catch((e)=>alert(e.message));
   }
   const register =(e) =>{
    e.preventDefault();
      auth.createUserWithEmailAndPassword(email, password)
      .then((auth)=>{
        history.push('/');
      }).catch((e)=>alert(e.message));
   }
    return (
        <div className="login">
        <Link to="/">
        <img className="login_logo" src="https://purepng.com/public/uploads/medium/amazon-logo-rgp.png" 
        alt="amazon"/>
        </Link>
            <div className="login_container">
                <h1>Signin</h1>
                <form action="">
                    <h5>Email</h5>
                    <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} />
                    <button type="submit"  onClick={login} className="login_signin">Sign In</button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <button onClick={register} className="login_register">Create New Account</button>
            </div>
        </div>
    )
}

export default Login
