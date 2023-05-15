import React from 'react'
import { useRef } from 'react';
import{useNavigate} from 'react-router-dom'
import "../styles/userLogin.css"
import ima from "../assets/userbg.jpg"
// import larrow from "../assets/arrow.png"
// import userimg from "../assets/userimg.png"
const UserLogin=()=> {
  let id=useRef(null);
  let password=useRef(null)
  let navigate=useNavigate()
  let submit=(e)=>{
    e.preventDefault();
    if (id.current.value == "admin@gmail.com" && password.current.value == 12345) {
      navigate("/userportal");
    } else {
      alert("Invalid credentials");
    }
  }
  return (
    <div className='UserLogin' style={{backgroundImage:`url(${ima})`}}>
     
     <form action="" onSubmit={submit} style={{height:"200px",width:"300px",marginLeft:"500px"}}>
     <h1>User Login...!</h1>
     <div className="login">
        <input ref={id} type="text" placeholder='Enter Login Id' />
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
