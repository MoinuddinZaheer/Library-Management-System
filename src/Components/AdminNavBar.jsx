import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/adminNavBar.css'

const AdminNavBar = () => {
  return (
    <div className='AdminNavbar'>
    <div className="uptext">
     <Link to="/admin/">Admin</Link>  
       <br />
       <img width="48" height="50" style={{marginLeft:"10px"}} src="" alt="" /> <br/> 
       admin@gmail.com
    </div><br /> <br />
    <div className="lis">
     <Link to="/admin/add-user">Adduser</Link>  <br /> <br />
     <Link to="/admin/add-books">Addbooks</Link> <br /> <br />
     <Link to="/admin/book-list">BookList</Link><br /> <br />
     <Link to="/admin/user-list">UserList</Link><br /> <br />
    </div>
    <div className="logout">
        <Link to="/">Logout</Link>
    </div>
</div>
  )
}

export default AdminNavBar
