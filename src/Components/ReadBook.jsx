import React from 'react'
import { useEffect } from 'react'
import {useParams} from 'react-router-dom'



const ReadBook = () => {
    let params=useParams()
useEffect(()=>
{
    let fetchData=async()=>{
        let response = await fetch(`http://localhost:4000/bookData/${params.id}`)
        let data = await response.json()
        
    }
    fetchData();
})
  return (
    <div>
      <h1>Read book</h1>
      <p></p>
    </div>
  )
}

export default ReadBook
