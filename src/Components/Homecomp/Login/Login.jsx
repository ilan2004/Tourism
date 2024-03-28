import React from 'react'
import loginv from '../../../assets/login.mp4'
import './Login.css';
import astro from '../../../assets/astronaut.jpg';
import email from '../../../assets/email.svg';
import pass from '../../../assets/password.svg';
const Login = () => {
  return (
    <div className='login-back'>
        <video autoPlay loop muted className='beach'>
            <source src ={loginv} type="video/mp4"/>
        </video>
        <form class="my-form" id="theform">
        <span class="login-welcome-row">
            <img
                class="login-welcome"
                src={astro}
            />
            <h1>LogIn!</h1>
        </span>
        
        <div class="text-field">
            <label for="email">Email:</label>
            <input
                aria-label="Email"
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
            />
            <img
                alt="Email Icon"
                title="Email Icon"
                src={email}
            />
        </div>
        <div class="text-field">
            <label for="password">Password:</label>
            <input
                id="password"
                type="password"
                aria-label="Password"
                name="password"
                placeholder="Your Password"
                title="Minimum 6 characters at least 1 Alphabet and 1 Number"
                pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
                required
            />
            <img
                alt="Password Icon"
                title="Password Icon"
                src={pass}
            />
        </div>
        <input type="submit" value="Submit" id="submitButton" class="my-form__button" />
        <div class="my-form__actions">
            <div class="my-form__row">
                <span>Did you forget your password?</span>
                <a href="#" title="Reset Password">Reset Password</a>
            </div>
            <div class="my-form__signup">
                <a href="#" title="Create Account">Create Account</a>
            </div>
        </div>
    </form>
     </div>
  )
}

export default Login;