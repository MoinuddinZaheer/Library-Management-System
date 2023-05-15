import React from 'react'
import { useRef } from 'react'

const AddBooks = () => {
  let author=useRef(null);
  let country=useRef(null);
  let imageLink=useRef(null);
  let language=useRef(null);
  let link=useRef(null);
  let pages=useRef(null);
  let title=useRef(null);
  let year=useRef(null);
  let description=useRef(null);

  let submit = (r) => {
    r.preventDefault() //prevent page from reloading
    let data = {
      author: author.current.value,
      country:country.current.value,
      imageLink:imageLink.current.value,
      language:language.current.value,
      link:link.current.value,
      pages:pages.current.value,
      title:title.current.value,
      year:year.current.value,
      description:description.current.value
      
      
    }
    fetch('http://localhost:4000/books',{
      method:'POST',
      headers:{"Content-Type":'application/json' },
      body:JSON.stringify(data)
    })
    alert('user added added...')
  }


  return (
    <div className='AdminLogin'>
    {/* <div className='arim' onClick={()=>nevigator("/")}><img src={larrow} alt="" /></div> */}
<form action="" style={{height:"350px",width:"500px",marginLeft:"200px",marginTop:"50px",backgroundColor:"white"}} onSubmit={submit}>
<div className="log" style={{width: "60%",height: "200px",marginLeft:"150px",marginTop:"100px"}}>
    <h1 style={{color:"blue"}}>Add Book</h1>
  <div >
    <input ref={author} type="text" placeholder='Add author name...' /> <br />
    <input ref={country} type="text" placeholder='Add origin country' /> <br />
    <input ref={imageLink} type="text" placeholder='Add imagelink...' /><br />
    <input ref={language} type="text" placeholder='Add language...' /><br />
    <input ref={link} type="text" placeholder='Add wikipedia link...' /><br />
    <input ref={pages} type="text" placeholder='Add pages...' /><br />
    <input ref={title} type="text" placeholder='Add title...' /><br />
    <input ref={year} type="text" placeholder='Add year...' /><br />
    <input ref={description} type="text" placeholder='Add description...' /><br />

  </div>
  <div className="btn">
    <button style={{color:"white" ,background:"blue"}}>Add</button>
  </div>
  </div>
</form>
  
</div>
  )
}

export default AddBooks
