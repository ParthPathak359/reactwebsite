import React from 'react'
import { useState, useEffect } from 'react';
import fire from './fire.js';
import NayaLog from 'C:/Users/patha/Desktop/reactapp/myapp/src/components/pages/Login/NayaLog.js';
import './UserSc.css'

const User=()=> {
    const [user,setUser] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [emailError,setEmailError] = useState('');
    const [passwordError,setPasswordError] = useState('');
    const [hasAccount,setHasAccount] = useState(false);


    const clearInputs =()=>{
        setEmail('');
        setPassword("");
    }

    const clearErrors=()=>{
        setEmailError("");
        setPasswordError("");
    }

    const handlelogin = () => {
        clearErrors();
        fire
        .auth()
        .signInWithEmailAndPassword(email,password)
        .catch(err =>{

            switch(err.code){
                case "auth/invalid-email":
                case "auth/user-diasbled":
                case "auth/user-not-found":
                    setEmailError(err.message);

            break;
                case "auth/wrong-password":
                    setPasswordError(err.message);
                    break;
            }
        });


    };

    const handleSignup = () => {
        clearErrors();
        fire
        .auth()
        .createUserWithEmailAndPassword(email,password)
        .catch(err =>{

            switch(err.code){
                case "auth/email-already-in-use":
                case "auth/invalid-email":
                    setEmailError(err.message);

            break;
                case "auth/weak-password":
                    setPasswordError(err.message);
                    break;
            }
        });


    };

    const handleLogout =()=>{
        fire.auth().signOut();
    };

    const authListner =()=>{
        fire.auth.onAuthStateChanged(user => {
            
            if(user)
            
            {
                clearInputs();
                setUser(user);
            }

            else

            {
                setUser("");
            }

        })
    }

    useEffect(()=>{
      authListner();
    },[] )

    return (
        <>
            <NayaLog
               email={email}
               setEmail={setEmail}
               password={password}
               setPassword={setPassword}
               handlelogin={handlelogin}
               handleSignup={handleSignup}
               hasAccount={hasAccount}
               setHasAccount={setHasAccount}
               emailError={emailError}
               passwordError={passwordError}
            />
        </>
    )
}

export default User
