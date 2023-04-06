import { Link } from 'react-router-dom'
import React from 'react'
import '../styles/landingPage.css'

const LandingPage=() => {
  return (
    <div className='LandingPage'>
      <div className="main1">
     <div className="main2">
     <h1>Navigate To...</h1>
     <div className="admin"> <Link to="/admin-login">..Admin Login...</Link></div>
      <div className="user"><Link to="/user-login">..User Login...</Link></div>
     </div>
      </div>
    </div>
  )
}

export default LandingPage
