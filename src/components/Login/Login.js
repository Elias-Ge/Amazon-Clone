import React, { useState } from 'react'
import "./Login.css"
import {Link, useNavigate} from "react-router-dom"
import {auth} from "../../Firebase"
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';
function Login() {

    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (event) => {
        event.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then( (userCredential)=> {
                if(userCredential)
                //redirect to home page
                navigate("/")
            })
            .catch(err => {
                alert(err.message)
            })
    }

    const register = (event) => {
        event.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                if(userCredential)
                //create a user, login and redirect to homepage
                navigate("/")
            })
            .catch(err => {

                alert(err.message)
            })
    }
    return (
        <div className="login">
            <Link to="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" className="login__logo"/>
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input value={email} type="email"
                    onChange={(e)=>setEmail(e.target.value)}
                    />

                    <h5>Password:</h5>
                    <input value={password} type="password"
                    onChange={(e)=>setPassword(e.target.value)}
                    />

                    <button type="submit" onClick={signIn} className="login__signInBtn">sign in</button>
                    <p>
                        by continuing, you agree to Amazon's 
                        <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=508088"> Conditions of Use</a> and 
                        <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=468496"> Privacy Notice.</a> 
                    </p>
                    <p>
                        <a href="https://www.amazon.com/gp/help/customer/account-issues/ref=ap_login_with_otp_claim_collection?ie=UTF8">Need help? </a>
                    </p>
                    <button onClick={register} className="login__registerBtn"> create your amazon account
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login
