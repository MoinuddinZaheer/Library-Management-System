import React from 'react'
import { useRef } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
const AdminLogin = () => {
  let id=useRef(null);
  let navigate=useNavigate();
  let password=useRef(null)
  let adminLogin=()=>
  {
    if (id.current.value == 'admin@gmail.com' && password.current.value == 12345) {
      navigate('/admin')
    } else {
      alert('Invalid Cedentials')
    }
  }
  return (
    <div>
      <h1>Admin login</h1>
      <form action="" onSubmit={adminLogin}>
      <div className="login">
        <input ref={id} type="text" placeholder='enter login id' />
      </div>
      <div className="password">
        <input ref={password} type="text" placeholder='Enter Your Password'/>
      </div>
      <div className="signIn">
        <button>Sign In</button>
      </div>
      </form>
    </div>
  )
}

export default AdminLogin
