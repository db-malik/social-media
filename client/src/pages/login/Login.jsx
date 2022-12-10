import React from 'react'
import './login.scss'
const Login = () => {
  return (
    <div className="loginContainer">
      <div className="card">
        <div className="left">
          <h1>Hello world.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            consequatur.
          </p>
          <span> Don't you have an account?</span>
          <button>register</button>
        </div>
        <div className="right">
          <h2>Login</h2>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
