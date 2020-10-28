import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core'

const Login = () => {
  const loginHandler = () => {}
  return (
    <div className="login">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/5/56/IMessage_logo_%28Apple_Inc.%29.png"
        alt=""
      />
      <Button onClick={loginHandler}>Login</Button>
    </div>
  )
}

export default Login
