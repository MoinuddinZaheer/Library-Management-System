import { Link } from 'react-router-dom'
import React from 'react'

const LandingPage=() => {
  return (
    <div className='LandingPage'>
      <h1>login as...</h1>
      <Link to="/admin-login">Admin Login</Link>
      <Link to="/user-login">User Login</Link>
    </div>
  )
}

export default LandingPage
