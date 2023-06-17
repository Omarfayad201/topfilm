import React from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo  from '../../assets/images/7a1bd9d0-7eef-40f7-8e40-94049c9f2830.jpeg'
export default function Navbar({userData , logout}) {

    return <>
      
<nav className="navbar navbar-expand-lg bg-body-tertiary px-3 bg-nav fonts ">
  <div className="container-fluid">
    <Link to={'/'} ><img className='logo-nav' src={logo} alt="" /></Link> 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            
            {userData !== null?<ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link  text-white spas" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white spas" to="/movies">Movies</NavLink>
        </li>
        <li className="nav-item">
                <NavLink className="nav-link text-white spas" to="/tvshow">TvShow</NavLink>
                
        </li>
        <li className="nav-item text-white">
        <NavLink className="nav-link text-white spas" to="/actors">Actors</NavLink>
        </li>
        
      </ul>:null}


      <ul className="navbar-nav ms-auto text-white">
        <li className="nav-item d-flex  align-items-center ">
         <i className=' mx-2 fab fa-facebook cursor-pointer'></i>
         <i className=' mx-2 fab fa-twitter cursor-pointer'></i>
         <i className=' mx-2 fab fa-youtube cursor-pointer'></i>
         <i className=' mx-2 fab fa-instagram cursor-pointer'></i>
         <i className=' mx-2 fab fa-github cursor-pointer'></i>
              </li>
              {userData === null? <>
              <li className="nav-item">
          <NavLink className="nav-link fw-bold text-white spas" aria-current="page" to="login">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link  fw-bold text-white spas" to="register">Register</NavLink>
        </li>
              </>:<li className="nav-item">
          <NavLink onClick={logout} className="nav-link fw-bold text-white spas" to={'./register'}>Logout</NavLink>
        </li>
              }

             
             
             
             
             
             
          
              
             
             


      </ul>
    </div>
  </div>
</nav>

    
    </>
}
