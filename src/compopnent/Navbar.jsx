import React from 'react'
import {Link} from 'react-router-dom'
import pic from '../compopnent/image/pic.jpg'

const Navbar = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
   <Link class="navbar-brand" to="#"><img src={pic} alt="" style={{width: '4rem',height: '3rem',
    margin: 'auto',borderRadius:'30px'}}/></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
         <Link class="nav-link active" aria-current="page" to="/">Home </Link>
        </li>
        <li class="nav-item">
         <Link class="nav-link active" aria-current="page" to="/about">About</Link>
        </li>
        <li class="nav-item">
         <Link class="nav-link active" aria-current="page" to="/contact">Contact</Link>
        </li>
        <li class="nav-item">
         <Link class="nav-link active" aria-current="page" to="/skills">Skills</Link>
        </li>
        <li class="nav-item">
         <Link class="nav-link active" aria-current="page" to="/Portfolio">Portfolio</Link>
        </li>
       
      
      </ul>
      
    </div>
  </div>
</nav>
    
    </>
  )
}

export default Navbar