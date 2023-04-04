import React from 'react'
import { Routes,Route } from 'react-router-dom'
import AdminHome from '../Components/AdminHome'
import BookList from '../Components/BookList'
import AdminNavBar from '../Components/AdminNavBar'
const AdminPortal = () => {
  return (
    <div>
        <AdminNavBar/>
<Routes>
    <Route path="/" element={<AdminHome/>}></Route>
    <Route path='/book-list' element={<BookList/>}></Route>
</Routes>
    </div>
  )
}

export default AdminPortal
