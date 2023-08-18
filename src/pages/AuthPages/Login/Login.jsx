import React from 'react'
import LoginForm from '../../../components/AuthComponents/LoginForm'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="container-fluid">
      <h1 className="display-1 my-5 text-center">Login here</h1>
      <div className="row">
        <div className="col-md-5 mx-auto mt-5">
          <LoginForm />
          <Link to="/register" className='ms-auto'>
            Not a Member? Register
          </Link><br/>
          <Link to="/" className='text-end'>
            GO Back To Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
