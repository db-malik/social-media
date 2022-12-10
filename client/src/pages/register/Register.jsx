import React from 'react'
import './register.scss'
const Register = () => {
  return (
    <div className="registerContainer">
      <div className="card">
        <div className="left">
          <h2>Register</h2>
          <form>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Register</button>
          </form>
        </div>
        <div className="right">
          <h1>DB Social.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            consequatur.
          </p>
          <span> Do you have an account?</span>
          <button>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Register
