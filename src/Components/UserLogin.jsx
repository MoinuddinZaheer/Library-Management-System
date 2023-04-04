import React from 'react'
import { useRef } from 'react';
const UserLogin=()=> {
  let id=useRef(null);
  let password=useRef(null)
  return (
    <div className='UserLogin'>
      <h1>User Login</h1>
     <form action="">
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

export default UserLogin
