import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavBar = () => {
  return (
    <div>
      <div className="nav">
        <div className="profile">
            <h3>admin</h3>
            <h3>admin@admin.com</h3>
        </div>
       <div className="addbook"> <Link to='/book-list'>Add Books</Link></div>
        <div className="adduser"><Link>Add User</Link></div>
        
      </div>
    </div>
  )
}

export default AdminNavBar
