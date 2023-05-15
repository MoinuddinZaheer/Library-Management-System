import React from 'react'
import { useRef } from 'react'

const AddUser = () => {
  let username=useRef(null)
  let password=useRef(null)
  let email = useRef(null)

  let submit = (r) => {
    r.preventDefault() //prevent page from reloading
    let data = {
      username: username.current.value,
      password:password.current.value,
      email:email.current.value
      
    }
    fetch('http://localhost:4000/user',{
      method:'POST',
      headers:{"Content-Type":'application/json' },
      body:JSON.stringify(data)
    })
    alert('user added added...')
  }

  return (
    <div className='AdminLogin'>
    {/* <div className='arim' onClick={()=>nevigator("/")}><img src={larrow} alt="" /></div> */}
  <form action="" onSubmit={submit} style={{marginLeft:"300px",marginTop:"100px",height:"300px",width:"300px"}} >
  <div className="log">
    <h1 style={{color:"blue"}}>Create User...</h1>
  <div >
    <input ref={email} type="text" placeholder='Add Email' /> <br />
    <input type="text" ref={username} placeholder='Enter  User name'/> <br />
    <input ref={password} type="password" placeholder='Add Password.' />
  </div>
  <div className="btn">
    <button style={{color:"white",backgroundColor:"blue"}}>Create</button>
  </div>
  </div>
  </form>
  
</div>
  )
}

export default AddUser
