import React from 'react'
import './UserSc.css'

const NayaLog=(props) => {
    const { email,
            setEmail, 
            password, 
            setPassword,
            handlelogin,
            handleSignup,
            hasAccount,
            setHasAccount,
            emailError,
            passwordError, } = props; 
    return (
        <>
            <section classname ="login">
                <div className="loginContainer">
                    <label>Username</label>
                    <input
                      type="text"
                      autoFocus
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <p className="errorMsg">{emailError}</p>


                    <label>Password</label>
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <p className="errorMsg">{passwordError}</p>
                    <div className="btnContainer">
                        {hasAccount ? (
                            <>
                              <button onClick={handlelogin}> Login </button>
                              <p>Don't have an account ?
                                  <span onClick={()=> setHasAccount(!hasAccount)}>Sign UP</span>
                              </p>
                            </>
                        ) : (
                            <>
                              <button onClick={handleSignup}> Sign Up </button>
                              <p>Have an account ? 
                                  <span onClick={()=> setHasAccount(!hasAccount)}>Login</span>
                              </p>
                            </>
                        )}
                    </div>
                </div>
            </section>

            
        </>
    )
}

export default NayaLog
